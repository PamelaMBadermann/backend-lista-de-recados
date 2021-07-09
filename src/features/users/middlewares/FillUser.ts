import { Request, Response, NextFunction } from "express";

export default async function FillUser(request: Request, response: Response, next: NextFunction) {
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({
            mensagem: "Necessário preenchimento dos campos USERNAME e PASSWORD para prosseguir."
        });
    }

    next();
}