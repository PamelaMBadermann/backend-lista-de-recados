"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../core/data/database/entities/User");
const Anottation_1 = require("../../../core/data/database/entities/Anottation");
class UserController {
    async index(request, response) {
        try {
            const users = await User_1.User.find();
            return response.json(users);
        }
        catch (error) {
            console.log('ERRO AO ACESSAR USUARIOS:', error);
        }
    }
    async show(request, response) {
        try {
            const { userUID } = request.params;
            const user = await User_1.User.findOne(userUID);
            return response.json(user);
        }
        catch (error) {
            console.log('ERRO AO PROCURAR POR USER', error);
        }
    }
    async store(request, response) {
        try {
            const { username, password } = request.body;
            const user = await new User_1.User(username, password).save();
            return response.json(user);
        }
        catch (error) {
            console.log('ERRO AO SALVAR USUARIO:', error);
        }
    }
    async update(request, response) {
        try {
            const { userUID } = request.params;
            const { username, password } = request.body;
            const user = await User_1.User.findOne(userUID);
            if (user) {
                user.username = username;
                user.password = password;
                user.save();
            }
            return response.send(user);
        }
        catch (error) {
            console.log('ERRO AO ATUALIZAR USUARIO', error);
        }
    }
    async delete(request, response) {
        try {
            const { userUID } = request.params;
            await Anottation_1.Anottation.delete({ userUID: userUID });
            await User_1.User.delete(userUID);
            return response.sendStatus(204);
        }
        catch (error) {
            console.log('ERRO AO DELETAR USUARIO', error);
        }
    }
}
exports.default = UserController;
