import { User } from './user.model';

export interface Anottation {
    uid: string;
    title: string;
    description: string;
    userUID: User;
}