import { Router } from 'express';
import AnottationController from '../controllers/AnottationController';
import AnottationUidNonExistent from '../middlewares/AnottationUidNonExistent';
import FillAnottation from '../middlewares/FillAnottation';
import LengthDescriptionAnottation from '../middlewares/LengthDescriptionAnottation';
import LengthTitleAnottation from '../middlewares/LengthTitleAnottation';
import UserUidNonexistent from '../middlewares/UserUidNonexistent';

export default class AnottationRoutes {
    public init(): Router {
        const routes = Router();
        const controller = new AnottationController();

        routes.get('/user/:userUID/anottation', UserUidNonexistent, controller.index);
        routes.get('/user/:userUID/anottation/:uid', [UserUidNonexistent, AnottationUidNonExistent], controller.show);
        routes.post('/user/:userUID/anottation', [FillAnottation, LengthTitleAnottation, LengthDescriptionAnottation], controller.store);
        routes.put('/user/:userUID/anottation/:uid', [UserUidNonexistent, AnottationUidNonExistent, FillAnottation, LengthTitleAnottation, LengthDescriptionAnottation], controller.update);
        routes.delete('/user/:userUID/anottation/:uid', [UserUidNonexistent, AnottationUidNonExistent], controller.delete);

        return routes;
    }
}