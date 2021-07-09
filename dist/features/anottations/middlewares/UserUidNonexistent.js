"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../core/data/database/entities/User");
async function UserUidNonexistent(request, response, next) {
    const { userUID } = request.params;
    const existentUid = await User_1.User.findOne({ uid: userUID });
    if (!existentUid) {
        return response.status(404).json({
            mensagem: "Este usuário não existe."
        });
    }
    next();
}
exports.default = UserUidNonexistent;
