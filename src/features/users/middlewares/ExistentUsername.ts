import { Request, Response, NextFunction } from "express";
import { User } from "../../../core/data/database/entities/User";

export default async function ExistentUsername(request: Request, response: Response, next: NextFunction) {
    const { username } = request.body;
    
    const existentUser = await User.findOne({ username: username });

    if (existentUser) {
        return response.status(400).json({
            mensagem: "Já existe usuário com este username."
        });
    }
    
    next();
}