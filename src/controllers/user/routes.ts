import { Router } from 'express';
import UserController from './Controller';
import validation from './validation';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from './../../libs/routes/authMoiddleWare';

const userRouter = Router();

userRouter.route('/user')

    .get(authmiddleware('getUsers', 'read' ), validationHandler(validation.get),UserController.list)
    // .post(validationHandler(validation.create), traineeController.create)
    .post( authmiddleware('getUsers', 'read' ), UserController.create)
    // .post( UserController.create)

    .put(authmiddleware('getUsers', 'read' ), validationHandler(validation.update),UserController.update)
    .delete(authmiddleware('getUsers', 'read' ), validationHandler(validation.delete), UserController.delete);

userRouter.delete('/user/:id', UserController.delete);

export default userRouter;