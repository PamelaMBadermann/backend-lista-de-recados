import { Request, Response, NextFunction } from "express";
import { Anottation } from "../../../core/data/database/entities/Anottation";

export default async function AnottationUidNonExistent(request: Request, response: Response, next: NextFunction) {
    const { uid } = request.params;

    const extistentUid = await Anottation.findOne({ uid: uid });

    if (!extistentUid) {
        return response.status(404).json({
            mensagem: "Esse Id de recado não existe."
        });
    }

    next();
}