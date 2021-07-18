"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = __importDefault(require("../controllers/PostController"));
class PostRoutes {
    init() {
        const routes = express_1.Router();
        const controller = new PostController_1.default();
        routes.get('/post', controller.index);
        routes.get('/post/:uid', controller.show);
        routes.post('/post', controller.store);
        routes.put('/post/:uid', controller.update);
        routes.delete('/post/:uid', controller.delete);
        return routes;
    }
}
exports.default = PostRoutes;
