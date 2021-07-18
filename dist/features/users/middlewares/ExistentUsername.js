"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../core/data/database/entities/User");
async function ExistentUsername(request, response, next) {
    const { username } = request.body;
    const existentUser = await User_1.User.findOne({ username: username });
    if (existentUser) {
        return response.status(400).json({
            mensagem: "Já existe usuário com este username."
        });
    }
    next();
}
exports.default = ExistentUsername;
