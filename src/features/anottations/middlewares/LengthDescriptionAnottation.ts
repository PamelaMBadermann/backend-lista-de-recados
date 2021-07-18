import { Request, Response, NextFunction } from "express";

export default async function LengthDescriptionAnottation(request: Request, response: Response, next: NextFunction) {
    const { description } = request.body;

    if (description > 150 ) {
        return await response.status(400).json({
            mensagem: "Descrição não pode ultrapassar 50 caracteres."
        })
    }
}