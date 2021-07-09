import { Request, Response, NextFunction } from "express";
import { title } from "process";

export default async function FillAnottation(request: Request, response: Response, next: NextFunction) {
    const { title, description } = request.body;

    if (!title || !description) {
        return await response.status(400).json({
            mensagem: "Necessário preenchimento dod campos TÍTULO e DESCRIÇÃO para prosseguir."
        });
    }

    next();
}