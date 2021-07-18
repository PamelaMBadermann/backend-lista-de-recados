"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function LengthDescriptionAnottation(request, response, next) {
    const { description } = request.body;
    if (description > 150) {
        return await response.status(400).json({
            mensagem: "Descrição não pode ultrapassar 50 caracteres."
        });
    }
}
exports.default = LengthDescriptionAnottation;
