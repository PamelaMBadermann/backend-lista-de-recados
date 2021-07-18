"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const App_1 = __importDefault(require("./core/presentation/App"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: '../.env'
});
const app = new App_1.default();
const port = process.env.PORT || 8080;
app.init().then(_ => app.start(port));
