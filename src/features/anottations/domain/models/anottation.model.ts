import { User } from '../../../../core/domain';

export interface Anottation {
    uid: string;
    title: string;
    description: string;
    userUID: string;
    user?: User
}