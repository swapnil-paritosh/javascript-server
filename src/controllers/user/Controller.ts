import { Request, Response } from 'express';
import UserRepository from './../../repositories/user/UserRepository';
import SystemResponse from './../../libs/SystemResponse';

class UserController {
    static instance:UserController;
    static userRepository: UserRepository;

    userRepository = new UserRepository();

    static getInstance = () => {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    };

    create = (req: Request, res: Response) => {
        try{
            console.log('::::::::::::::::::__INSIDE CREATE User__:::::::::::::::::::');
            const {name,address,email,mobileNumber,hobbies}=req.body;

            this.userRepository.create({name,address,email,mobileNumber,hobbies}).then(user =>{
                return SystemResponse.success(res,user, "trainee added successfully");
            })
            .catch(error => {
                throw error;
                
            });
        }catch (err) { }
        
        
    };

    list = (req: Request, res: Response) => {
        try{
            console.log('::::::::::::::::::__INSIDE LIST User__:::::::::::::::::');
            this.userRepository.list().then(user => {
                return SystemResponse.success(res,user,"list of users");
            }).catch(error =>{
                throw error;
                
            });
        }catch (err) { }
       
        
    };

    delete = (req: Request, res: Response) => {
        try{
            console.log('::::::::::::::::::__INSIDE DELETE USER__::::::::::::::::::::');
            const { id,dataToUpdate } = req.body;

            this.userRepository.delete(id).then(user => {
                return SystemResponse.success(res,user,"user deleted successfully");
            }).catch(error =>{
                throw error;
            });
            

        }catch (err) { }
    };

    update = (req: Request, res: Response) => {
        try{
            console.log('::::::::::::::::::__INSIDE UPDATE USER__::::::::::::::::::::');
            const { id,dataToUpdate } = req.body;

            this.userRepository.update({_id:id },dataToUpdate).then(user => {
                return SystemResponse.success(res,user,"user updated successfully");
            }).catch(error =>{
                throw error;
            });
            

        }catch (err) { }
        
        
    };
}
export default UserController.getInstance();