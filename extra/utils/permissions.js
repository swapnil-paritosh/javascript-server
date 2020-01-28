// let moduleName=process.argv[2]
// let role=process.argv[3]
// let permissionType=process.argv[4]
import { permission } from './../constants.js'


export default function hasPermission(moduleName, role, permissionType) 
    {
        for (let i = 0; i < permission[moduleName][permissionType].length; i++) 
        {
            if (permission[moduleName][permissionType][i].match(role)) 
            {
                return true;
            }
        }
        return false;
    }

 
