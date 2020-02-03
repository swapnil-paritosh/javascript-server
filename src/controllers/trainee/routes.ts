import { Router } from 'express';
import traineeController from './Controller';

const traineeRouter = Router();

traineeRouter.route('/trainee')
    .get(traineeController.list)
    .post(traineeController.create)
    .delete(traineeController.delete)
    .put(traineeController.update);

export default traineeRouter;