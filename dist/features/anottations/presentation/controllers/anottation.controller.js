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
var _AnottationController_repository, _AnottationController_cache;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnottationController = void 0;
const presentation_1 = require("../../../../core/presentation");
class AnottationController {
    constructor(repository, cache) {
        _AnottationController_repository.set(this, void 0);
        _AnottationController_cache.set(this, void 0);
        __classPrivateFieldSet(this, _AnottationController_repository, repository, "f");
        __classPrivateFieldSet(this, _AnottationController_cache, cache, "f");
    }
    async index(request) {
        try {
            const cache = await __classPrivateFieldGet(this, _AnottationController_cache, "f").get('anottation:all');
            if (cache) {
                return presentation_1.ok(cache);
            }
            const anottation = await __classPrivateFieldGet(this, _AnottationController_repository, "f").getAll();
            return presentation_1.ok(anottation);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async show(request) {
        try {
            const { uid } = request.params;
            const cache = await __classPrivateFieldGet(this, _AnottationController_cache, "f").get(`anottation:${uid}`);
            if (cache) {
                return presentation_1.ok(cache);
            }
            const anottation = await __classPrivateFieldGet(this, _AnottationController_repository, "f").getOne(uid);
            if (!anottation) {
                return presentation_1.notFound();
            }
            await __classPrivateFieldGet(this, _AnottationController_cache, "f").set(`anottation:${uid}`, anottation);
            return presentation_1.ok(anottation);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async store(request) {
        try {
            const { userUID } = request.params;
            const { title, description } = request.body;
            const cache = await __classPrivateFieldGet(this, _AnottationController_cache, "f").set(request.body, request.params);
            const anottation = await __classPrivateFieldGet(this, _AnottationController_repository, "f").create(request.body);
            return presentation_1.ok(anottation);
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
    async update(request) {
        const { uid } = request.params;
        const anottation = await __classPrivateFieldGet(this, _AnottationController_repository, "f").create(request.body);
        return presentation_1.ok(anottation);
    }
    async delete(request) {
        try {
            const { uid } = request.params;
            await __classPrivateFieldGet(this, _AnottationController_repository, "f").delete(uid);
            return presentation_1.ok({});
        }
        catch (error) {
            return presentation_1.serverError();
        }
    }
}
exports.AnottationController = AnottationController;
_AnottationController_repository = new WeakMap(), _AnottationController_cache = new WeakMap();
