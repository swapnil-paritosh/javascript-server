import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import IUserCreate from '../entities/IUserCreate'

class UserRepository {
    private userModel: mongoose.Model<IUserModel>

    constructor() {
        this.userModel = userModel;
    }

    create = (data: IUserCreate) =>{
        return this.userModel.create(data);

    }
    count = () =>{
        return this.userModel.countDocuments();
    }

    update = (id,dataToUpdate) =>{
        return this.userModel.update(id, dataToUpdate);

    }
    list = () =>{
        return this.userModel.find();
    }
    delete = (id) =>{
        return this.userModel.findByIdAndDelete(id);
    }
}

export default UserRepository