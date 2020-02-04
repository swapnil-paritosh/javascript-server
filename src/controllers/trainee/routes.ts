import { Router } from 'express';
import traineeController from './Controller';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler'

const traineeRouter = Router();

traineeRouter.route('/trainee')
.get( validationHandler(validation), traineeController.list )
.post( validationHandler(validation), traineeController.create)
.put( validationHandler(validation), traineeController.update)
.delete( validationHandler(validation), traineeController.delete);

traineeRouter.delete('/trainee/:id', validationHandler(validation), traineeController.delete);

export default traineeRouter;