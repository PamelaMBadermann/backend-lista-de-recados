import { AnottationEntity } from '../../../../core/infra';
import { Anottation } from '../../domain/models';

export class AnottationRepository {
    async create(params: Anottation): Promise<Anottation> {
        const { title, description, userUID } = params;

        const anottation = await AnottationEntity.create({
            title, 
            description
        }).save();

        return Object.assign({}, params, anottation);
    }

    async getAll(): Promise<Anottation[]> {
        const anottations = await AnottationEntity.find();

        return anottations.map(anottation => ({
            uid: anottation.uid,
            title: anottation.title,
            description: anottation.description,
            userUID: anottation.userUID
        }));
    }

    async getOne(uid: string): Promise<Anottation | null> {
        const anottation = await AnottationEntity.findOne(uid);

        if (!anottation) {
            return null
        }

        return {
            uid: anottation.uid,
            title: anottation.title,
            description: anottation.description,
            userUID: anottation.userUID
        };
    }

    public async update(uid: string, params: Anottation): Promise<Anottation | null> {
        const anottation = await AnottationEntity.findOne(uid);

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

    async delete(uid: string): Promise<void> {
        const anottation = await AnottationEntity.findOne(uid);

        if (anottation) {
            anottation.remove();
        }
    }
}