"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AnottationController_1 = __importDefault(require("../controllers/AnottationController"));
class AnottationRoutes {
    init() {
        const routes = express_1.Router();
        const controller = new AnottationController_1.default();
        routes.get('/user/:userUID/anottation', controller.index);
        routes.get('/user/:userUID/anottation/:uid', controller.show);
        routes.post('/user/:userUID/anottation', controller.store);
        routes.put('/user/:userUID/anottation/:uid', controller.update);
        routes.delete('/user/:userUID/anottation/:uid', controller.delete);
        return routes;
    }
}
exports.default = AnottationRoutes;
