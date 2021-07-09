import { Request, Response } from 'express';
import { Anottation } from '../../../core/data/database/entities/Anottation';
import { User } from '../../../core/data/database/entities/User';

export default class AnottationController {

    public async index(request: Request, response: Response) {
        try {
            const { userUID } = request.params;

            const anottations = await Anottation.find({userUID});
 
            return response.send(anottations);
        } catch (error) {
            console.log('ERRO AO ACESSAR USUARIOS:', error);
        }
    }

    public async show(request: Request, response: Response) {
        try {
            const { userUID, uid } = request.params;

            const anottation = await Anottation.find({userUID, uid});
 
            return response.send(anottation);
        } catch (error) {
            console.log('ERRO AO PROCURAR POR RECADO', error)
        }
    }

    public async store(request: Request, response: Response) {
        try {
            const { userUID } = request.params;

            const { title, description } = request.body;

            const anottation = await new Anottation(title, description, userUID).save();

            return response.send(anottation);
        } catch (error) {
            console.log('ERRO AO SALVAR RECADO', error);
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const { uid } = request.params;
            const { title, description } = request.body;
            const anottation = await Anottation.findOne(uid);

            if (anottation) {
                anottation.title = title;
                anottation.description = description;
                anottation.save();
            }

            return response.json(anottation);
        } catch (error) {
            console.log('ERRO AO ATUALIZAR RECADO:', error)
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            const { uid } = request.params;

            await Anottation.delete(uid);

            return response.sendStatus(204);
        } catch (error) {
            console.log('ERRO AO DELETAR PRODUTO', error);
        }
    }
}