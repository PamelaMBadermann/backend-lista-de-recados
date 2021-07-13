import { Request, Response, NextFunction } from "express";
import { User } from "../../../core/data/database/entities/User";

export default async function UidNonexistent(request: Request, response: Response, next: NextFunction) {
    const { userUID } = request.params;
    const user = await User.findOne(userUID);

    const existentUid = await User.findOne({ uid: userUID });

    if (!existentUid) {
        return response.status(404).json({
            mensagem: "Este usuário não existe."
        });
    }

    return response.json(user);

    next();
}