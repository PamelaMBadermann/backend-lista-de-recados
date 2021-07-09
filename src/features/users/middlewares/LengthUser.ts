import { Request, Response, NextFunction } from "express";

export default async function LengthUser(request: Request, response: Response, next: NextFunction) {
    const { username, password } = request.body;

    if (username && password < 4 || username && password > 25) {
        return response.status(400).json({
            mensagem: "Username e senha precisa conter entre 4 e 25 caracteres."
        });
    }

    next();
}