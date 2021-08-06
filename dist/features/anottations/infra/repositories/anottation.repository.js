"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnottationRepository = void 0;
const infra_1 = require("../../../../core/infra");
class AnottationRepository {
    async create(params) {
        const { title, description, userUID } = params;
        const anottation = await infra_1.AnottationEntity.create({
            title,
            description
        }).save();
        return Object.assign({}, params, anottation);
    }
    async getAll() {
        const anottations = await infra_1.AnottationEntity.find();
        return anottations.map(anottation => ({
            uid: anottation.uid,
            title: anottation.title,
            description: anottation.description,
            userUID: anottation.userUID
        }));
    }
    async getOne(uid) {
        const anottation = await infra_1.AnottationEntity.findOne(uid);
        if (!anottation) {
            return null;
        }
        return {
            uid: anottation.uid,
            title: anottation.title,
            description: anottation.description,
            userUID: anottation.userUID
        };
    }
    async update(uid, params) {
        const anottation = await infra_1.AnottationEntity.findOne(uid);
        if (!anottation) {
            return null;
        }
        anottation.title = params.title;
        anottation.description = params.description;
        anottation.save();
        return {
            uid: anottation.uid,
            title: anottation.title,
            description: anottation.description,
            userUID: anottation.userUID,
        };
    }
    async delete(uid) {
        const anottation = await infra_1.AnottationEntity.findOne(uid);
        if (anottation) {
            anottation.remove();
        }
    }
}
exports.AnottationRepository = AnottationRepository;
