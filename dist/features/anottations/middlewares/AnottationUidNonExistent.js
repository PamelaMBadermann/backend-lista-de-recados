"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Anottation_1 = require("../../../core/data/database/entities/Anottation");
async function AnottationUidNonExistent(request, response, next) {
    const { uid } = request.params;
    const extistentUid = await Anottation_1.Anottation.findOne({ uid: uid });
    if (!extistentUid) {
        return response.status(404).json({
            mensagem: "Esse Id de recado não existe."
        });
    }
    next();
}
exports.default = AnottationUidNonExistent;
