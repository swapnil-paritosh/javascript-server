import { Router } from 'express';
import traineeController from './Controller';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from './../../libs/routes/authMoiddleWare';

const traineeRouter = Router();

traineeRouter.route('/trainee')

.get( authmiddleware('getUsers', 'write' ), validationHandler(validation.get), traineeController.list )
.post( validationHandler(validation.create), traineeController.create)
.put( validationHandler(validation.update), traineeController.update)
.delete( validationHandler(validation.delete), traineeController.delete);

traineeRouter.delete('/trainee/:id', validationHandler(validation), traineeController.delete);

export default traineeRouter;