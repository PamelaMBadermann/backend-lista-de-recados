"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../core/data/database/entities/User");
async function UidNonexistent(request, response, next) {
    const { userUID } = request.params;
    const user = await User_1.User.findOne(userUID);
    const existentUid = await User_1.User.findOne({ uid: userUID });
    if (!existentUid) {
        return response.status(404).json({
            mensagem: "Este usuário não existe."
        });
    }
    return response.json(user);
    next();
}
exports.default = UidNonexistent;
