"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarIdRecado = exports.validarUsername = exports.validarToken = exports.encontrarGrowdever = exports.validarParametros = void 0;
const index_1 = require("../index");
const index_2 = require("../index");
async function validarParametros(request, response, next) {
    const { username, password } = request.body;
    if (!username || !password) {
        return response.json({
            mensagem: 'Dados inválidos!'
        }).status(400);
    }
    next();
}
exports.validarParametros = validarParametros;
async function encontrarGrowdever(request, response, next) {
    const { username } = request.params;
    const growdever = index_1.growdevers.find((growdever) => growdever.username == username);
    if (!growdever) {
        return response.json({
            mensagem: 'Growdever não encontrado!'
        }).status(404);
    }
    next();
}
exports.encontrarGrowdever = encontrarGrowdever;
async function validarToken(request, response, next) {
    const { token } = request.query;
    if (!token || token !== index_2.globalToken) {
        return response.json({
            mensagem: 'Token inválido.'
        }).status(401);
    }
    next();
}
exports.validarToken = validarToken;
async function validarUsername(request, response, next) {
    const { username } = request.params;
    if (!username) {
        return response.json({
            mensagem: 'Precisamos de um Username para começar =('
        }).status(400);
    }
    next();
}
exports.validarUsername = validarUsername;
async function validarIdRecado(request, response, next) {
}
exports.validarIdRecado = validarIdRecado;
