"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function LengthUser(request, response, next) {
    const { username, password } = request.body;
    if (username && password < 4 || username && password > 25) {
        return response.status(400).json({
            mensagem: "Username e senha precisa conter entre 4 e 25 caracteres."
        });
    }
    next();
}
exports.default = LengthUser;
