"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function FillUser(request, response, next) {
    const { username, password } = request.body;
    if (!username || !password) {
        return await response.status(400).json({
            mensagem: "Necessário preenchimento dos campos USERNAME e PASSWORD para prosseguir."
        });
    }
    next();
}
exports.default = FillUser;
