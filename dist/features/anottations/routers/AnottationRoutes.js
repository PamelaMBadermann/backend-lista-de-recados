"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AnottationController_1 = __importDefault(require("../controllers/AnottationController"));
const AnottationUidNonExistent_1 = __importDefault(require("../middlewares/AnottationUidNonExistent"));
const FillAnottation_1 = __importDefault(require("../middlewares/FillAnottation"));
const LengthDescriptionAnottation_1 = __importDefault(require("../middlewares/LengthDescriptionAnottation"));
const LengthTitleAnottation_1 = __importDefault(require("../middlewares/LengthTitleAnottation"));
const UserUidNonexistent_1 = __importDefault(require("../middlewares/UserUidNonexistent"));
class AnottationRoutes {
    init() {
        const routes = express_1.Router();
        const controller = new AnottationController_1.default();
        routes.get('/user/:userUID/anottation', UserUidNonexistent_1.default, controller.index);
        routes.get('/user/:userUID/anottation/:uid', [UserUidNonexistent_1.default, AnottationUidNonExistent_1.default], controller.show);
        routes.post('/user/:userUID/anottation', [FillAnottation_1.default, LengthTitleAnottation_1.default, LengthDescriptionAnottation_1.default], controller.store);
        routes.put('/user/:userUID/anottation/:uid', [UserUidNonexistent_1.default, AnottationUidNonExistent_1.default, FillAnottation_1.default, LengthTitleAnottation_1.default, LengthDescriptionAnottation_1.default], controller.update);
        routes.delete('/user/:userUID/anottation/:uid', [UserUidNonexistent_1.default, AnottationUidNonExistent_1.default], controller.delete);
        return routes;
    }
}
exports.default = AnottationRoutes;
