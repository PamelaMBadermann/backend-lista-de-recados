"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _App_express;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Database_1 = __importDefault(require("../data/connections/Database"));
const UserRoutes_1 = __importDefault(require("../../features/users/routers/UserRoutes"));
const AnottationRoutes_1 = __importDefault(require("../../features/anottations/routers/AnottationRoutes"));
class App {
    constructor() {
        _App_express.set(this, void 0);
        __classPrivateFieldSet(this, _App_express, express_1.default(), "f");
    }
    async init() {
        this.config();
        this.middlewares();
        this.routes();
        await this.database();
    }
    async database() {
        await new Database_1.default().openConnection();
    }
    config() {
        __classPrivateFieldGet(this, _App_express, "f").use(express_1.default.json());
        __classPrivateFieldGet(this, _App_express, "f").use(express_1.default.urlencoded({ extended: false }));
        __classPrivateFieldGet(this, _App_express, "f").use(cors_1.default());
    }
    middlewares() {
    }
    routes() {
        const userRoutes = new UserRoutes_1.default().init();
        const anottationRoutes = new AnottationRoutes_1.default().init();
        __classPrivateFieldGet(this, _App_express, "f").use(userRoutes);
        __classPrivateFieldGet(this, _App_express, "f").use(anottationRoutes);
    }
    start(port) {
        __classPrivateFieldGet(this, _App_express, "f").listen(port, () => {
            console.log('Api maravilinda rodando...');
        });
    }
}
exports.default = App;
_App_express = new WeakMap();
;
