"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function FillAnottation(request, response, next) {
    const { title, description } = request.body;
    if (!title || !description) {
        return response.status(400).json({
            mensagem: "Necessário preenchimento dod campos TÍTULO e DESCRIÇÃO para prosseguir."
        });
    }
    next();
}
exports.default = FillAnottation;
