import { diamond, equilateral } from './pattern/index'
import { hasPermission } from  './utils/index'
import { validateUsers } from './utils/index';
import { users } from './constants'

diamond(5);
equilateral(5);

console.log(hasPermission("getUsers", "trainee", "read"))

validateUsers(users);
