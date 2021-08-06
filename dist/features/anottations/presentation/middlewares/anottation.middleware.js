"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnottationMiddleware = void 0;
const presentation_1 = require("../../../../core/presentation");
const presentation_2 = require("../../../../core/presentation");
class AnottationMiddleware {
    constructor() {
        this.fields = ['title', 'userUID'];
    }
    async handle(request) {
        const body = request.body;
        for (const field of this.fields) {
            const error = new presentation_2.RequireFieldsValidator(field).validate(body);
            if (error) {
                return presentation_1.badRequest(error);
            }
        }
        return presentation_1.ok({});
    }
}
exports.AnottationMiddleware = AnottationMiddleware;
