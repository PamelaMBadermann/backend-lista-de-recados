"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const database_1 = __importDefault(require("./core/infra/data/connections/database"));
const app_1 = __importDefault(require("./core/presentation/app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: './../.env'
});
new database_1.default().openConnection()
    .then(_ => {
    const app = new app_1.default();
    const port = process.env.PORT || '8080';
    app.init();
    app.start(parseInt(port));
})
    .catch(console.error);
