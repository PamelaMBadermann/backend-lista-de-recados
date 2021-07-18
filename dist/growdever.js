"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Growdever {
    constructor(username, password, nome, idade, turma, cidade, recados) {
        this.recados = [];
        this.username = username;
        this.password = password;
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
        this.cidade = cidade;
        this.recados = recados;
    }
    addRecado(recado) {
        this.recados.push(recado);
    }
}
exports.default = Growdever;
