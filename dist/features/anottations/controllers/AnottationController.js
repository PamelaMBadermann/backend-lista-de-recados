"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Anottation_1 = require("../../../core/data/database/entities/Anottation");
class AnottationController {
    async index(request, response) {
        try {
            const { userUID } = request.params;
            const anottations = await Anottation_1.Anottation.find({ userUID });
            return response.send(anottations);
        }
        catch (error) {
            console.log('ERRO AO ACESSAR USUARIOS:', error);
        }
    }
    async show(request, response) {
        try {
            const { userUID, uid } = request.params;
            const anottation = await Anottation_1.Anottation.find({ userUID, uid });
            return response.send(anottation);
        }
        catch (error) {
            console.log('ERRO AO PROCURAR POR RECADO', error);
        }
    }
    async store(request, response) {
        try {
            const { userUID } = request.params;
            const { title, description } = request.body;
            const anottation = await new Anottation_1.Anottation(title, description, userUID).save();
            return response.send(anottation);
        }
        catch (error) {
            console.log('ERRO AO SALVAR RECADO', error);
        }
    }
    async update(request, response) {
        try {
            const { uid } = request.params;
            const { title, description } = request.body;
            const anottation = await Anottation_1.Anottation.findOne(uid);
            if (anottation) {
                anottation.title = title;
                anottation.description = description;
                anottation.save();
            }
            return response.json(anottation);
        }
        catch (error) {
            console.log('ERRO AO ATUALIZAR RECADO:', error);
        }
    }
    async delete(request, response) {
        try {
            const { uid } = request.params;
            await Anottation_1.Anottation.delete(uid);
            return response.sendStatus(204);
        }
        catch (error) {
            console.log('ERRO AO DELETAR PRODUTO', error);
        }
    }
}
exports.default = AnottationController;
