import { badRequest, ok } from "../../../../core/presentation";
import { HttpRequest, HttpResponse } from "../../../../core/presentation";
import { RequireFieldsValidator } from "../../../../core/presentation";
import { Anottation } from "../../domain/models";

export class AnottationMiddleware {
    private fields = ['title', 'userUID'];

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const body: Anottation = request.body;

        for (const field of this.fields) {
            const error = new RequireFieldsValidator(field).validate(body);

            if (error) {
                return badRequest(error);
            }
        }

        return ok({});
    }
}