import { Router } from 'express';
import UserController from '../controllers/UserController';
import FillUser from '../middlewares/FillUser';
import ExistentUsername from '../middlewares/ExistentUsername';
import LengthUser from '../middlewares/LengthUser';
import UserUidNonexistent from '../middlewares/UidNonexistent';

export default class UserRoutes {
    public init(): Router {
        const routes = Router();
        const controller = new UserController();

        routes.get('/user', controller.index);
        routes.get('/user/:userUID', UserUidNonexistent, controller.show);
        routes.post('/user', [FillUser, ExistentUsername, LengthUser], controller.store);
        routes.put('/user/:userUID', [UserUidNonexistent, FillUser, ExistentUsername, LengthUser], controller.update);
        routes.delete('user/:userUID', UserUidNonexistent, controller.delete);

        return routes;
    }
}