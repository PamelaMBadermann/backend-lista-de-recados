"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function LengthTitleAnottation(request, response, next) {
    const { title } = request.body;
    if (title > 50) {
        return await response.status(400).json({
            mensagem: "Título não pode ultrapassar 50 caracteres."
        });
    }
}
exports.default = LengthTitleAnottation;
