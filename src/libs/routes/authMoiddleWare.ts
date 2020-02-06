import { Request, Response, NextFunction, } from 'express';
import * as jwt from 'jsonwebtoken';
import config from './../../config/configuration';
import hasPermission from '../permissions';

export default (module, permissionType) => (req: Request, res: Response, next: NextFunction) => {
    try {
        
        console.log("::::::::::::::::AUTHMIDDLEWARE::::::::::::::::", module, permissionType);
        const token: string = req.headers['authorization']
        const { secretkey } = config;

        const decodedUser = jwt.verify(token, secretkey);

        if(!decodedUser) {
            next({
                status: 403,
                error: "UnAuthorised Access",
                message: "UnAuthorized Access"
            });
        }

        if(!hasPermission(module, decodedUser.role, permissionType)){
            next({
                status: 403,
                error: "UnAuthorised Access",
                message: `${decodedUser.role} do not have permission to ${permissionType}`
            });
        }

        next()
    }
    catch (error) {
        next({
            status: 403,
            error: error,
            message: "UnAuthorized Access"

        })
    }

}