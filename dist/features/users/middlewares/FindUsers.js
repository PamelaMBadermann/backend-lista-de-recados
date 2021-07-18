"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../core/data/database/entities/User");
async function FindUsers(request, response, next) {
    const users = await User_1.User.find();
    if (!users) {
        return await response.status(400).json({
            mensagem: "Ainda não foi criado nenhum usuário."
        });
    }
    next();
}
exports.default = FindUsers;
