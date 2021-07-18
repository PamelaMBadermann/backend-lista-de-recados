import { Router } from 'express';
import UserController from '../controllers/UserController';

export default class UserRoutes {
    public init(): Router {
        const routes = Router();
        const controller = new UserController();

        routes.get('/user', controller.index);
        routes.get('/user/:userUID', controller.show);
        routes.post('/user', controller.store);
        routes.put('/user/:userUID', controller.update);
        routes.delete('user/:userUID', controller.delete);

        return routes;
    }
}