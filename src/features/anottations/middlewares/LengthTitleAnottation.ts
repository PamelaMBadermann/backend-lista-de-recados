import { Request, Response, NextFunction } from "express";

export default async function LengthTitleAnottation(request: Request, response: Response, next: NextFunction) {
    const { title } = request.body;

    if (title > 50 ) {
        return await response.status(400).json({
            mensagem: "Título não pode ultrapassar 50 caracteres."
        })
    }
}