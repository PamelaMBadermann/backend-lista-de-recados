"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Database {
    getConnection() {
        if (Database.connection === null || Database.connection === undefined) {
            throw new Error('CONEXAO_DATABASE_NAO_ABERTA');
        }
        return Database.connection;
    }
    async openConnection() {
        if (Database.connection === null || Database.connection === undefined) {
            try {
                Database.connection = await typeorm_1.createConnection();
            }
            catch (error) {
                console.log('ERRO AO CONECTAR NO BANCO', error);
            }
        }
    }
}
exports.default = Database;
