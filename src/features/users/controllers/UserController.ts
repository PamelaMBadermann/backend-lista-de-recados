import { Request, Response } from 'express';
import { User } from '../../../core/data/database/entities/User';
import { Anottation } from '../../../core/data/database/entities/Anottation';
export default class UserController {
    
    public async index(request: Request, response: Response) {
        try {
            const users = await User.find();

            if (!users) {
                return await response.status(400).json({
                    mensagem: "Ainda não foi criado nenhum usuário."
                });
            }        

            return response.json(users);
        } catch (error) {
            console.log('ERRO AO ACESSAR USUARIOS:', error);
        }
    }

    public async show(request: Request, response: Response) {
        try {
            const { userUID } = request.params;
            const user = await User.findOne(userUID);

            return response.json(user);
        } catch (error) {
            console.log('ERRO AO PROCURAR POR USER', error);
        }
    }

    public async store(request: Request, response: Response) {
        try {
            const { username, password } = request.body;
            
            const user = await new User(username, password).save();

            return response.json(user);
        } catch (error) {
            console.log('ERRO AO SALVAR USUARIO:', error);
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const { userUID } = request.params;
            const { username, password } = request.body;
            
            const user = await User.findOne(userUID);

            if (user) {
                user.username = username;
                user.password = password;
                user.save();
            }

            return response.send(user);
        } catch (error) {
            console.log('ERRO AO ATUALIZAR USUARIO', error);
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            const { userUID } = request.params;

            await Anottation.delete({userUID: userUID});
            await User.delete(userUID);

            return response.sendStatus(204);
        } catch (error) {
            console.log('ERRO AO DELETAR USUARIO', error);
        }
    }
}