import { HttpRequest, HttpResponse } from '../../../../core/presentation';
import { notFound, ok, serverError } from '../../../../core/presentation';
import { MVCController } from '../../../../core/presentation';
import { AnottationRepository } from '../../infra';
import { CacheRepository } from '../../infra';

export class AnottationController implements MVCController {
    readonly #repository: AnottationRepository;
    readonly #cache: CacheRepository;

    constructor(repository: AnottationRepository, cache: CacheRepository) {
        this.#repository = repository;
        this.#cache = cache;
    }

    public async index(request: HttpRequest): Promise<HttpResponse> {
        try {
            const cache = await this.#cache.get('anottation:all');

            if (cache) {
                return ok(cache);
            }
            
            const anottation = await this.#repository.getAll();
            return ok(anottation);
        } catch (error) {
            return serverError();
        }
    }

    public async show(request: HttpRequest): Promise<HttpResponse> {
        try {
            const { uid } = request.params;
            const cache = await this.#cache.get(`anottation:${uid}`);

            if (cache) {
                return ok(cache);
            }
            
            const anottation = await this.#repository.getOne(uid);

            if (!anottation) {
                return notFound();
            }

            await this.#cache.set(`anottation:${uid}`, anottation);

            return ok(anottation);
        } catch (error) {
            return serverError();
        }
    }

    public async store(request: HttpRequest): Promise<HttpResponse> {
        try {
            const { userUID } = request.params;
            const { title, description } = request.body;

            const cache = await this.#cache.set(request.body, request.params);
            const anottation = await this.#repository.create(request.body);
            return ok(anottation);
        } catch (error) {
            return serverError();
        }
    }

    public async update(request: HttpRequest): Promise<HttpResponse> {
        const { uid } = request.params;
        const anottation = await this.#repository.create(request.body);
        return ok(anottation);
    }

    public async delete(request: HttpRequest): Promise<HttpResponse> {
        try {
            const { uid } = request.params;
            await this.#repository.delete(uid);
        
            return ok ({});
        } catch (error) {
            return serverError();
        }
    }
}

