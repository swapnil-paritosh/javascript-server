import * as mongoose from 'mongoose'
import seedData from './seedData';
export default class Database {
    static open = (mongoUri: string) => {
        return new Promise ((resolve,reject)=> {
        mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
            if (err) {
                console.log('Error in Mongo DB Connection');
                reject(err);
            }
            resolve();
            seedData();
            console.log('DB Connected Successfully');
        })
        .catch(error => (console.log(error)));
    });
    }

    static disconnect = () => {
        mongoose.connection.close();
        console.log('Mongoose is Disconnected');


    }
}