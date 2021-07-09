"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const FillUser_1 = __importDefault(require("../middlewares/FillUser"));
const ExistentUsername_1 = __importDefault(require("../middlewares/ExistentUsername"));
const LengthUser_1 = __importDefault(require("../middlewares/LengthUser"));
const UidNonexistent_1 = __importDefault(require("../middlewares/UidNonexistent"));
class UserRoutes {
    init() {
        const routes = express_1.Router();
        const controller = new UserController_1.default();
        routes.get('/user', controller.index);
        routes.get('/user/:userUID', UidNonexistent_1.default, controller.show);
        routes.post('/user', [FillUser_1.default, ExistentUsername_1.default, LengthUser_1.default], controller.store);
        routes.put('/user/:userUID', [UidNonexistent_1.default, FillUser_1.default, ExistentUsername_1.default, LengthUser_1.default], controller.update);
        routes.delete('user/:userUID', UidNonexistent_1.default, controller.delete);
        return routes;
    }
}
exports.default = UserRoutes;
