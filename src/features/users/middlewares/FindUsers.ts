import { Request, Response, NextFunction } from "express";
import { User } from "../../../core/data/database/entities/User";

export default async function FindUsers(request: Request, response: Response, next: NextFunction) {
    const users = await User.find();

    if (!users) {
        return await response.status(400).json({
            mensagem: "Ainda não foi criado nenhum usuário."
        });
    }
    
    next();
}