import { diamond, equilateral } from './pattern/index.js'
import { hasPermission } from  './utils/index.js'
import { validateUsers } from './utils/index.js';
import { users } from './constants.js'

diamond(5);
equilateral(5);

console.log(hasPermission("getUsers", "trainee", "read"))

validateUsers(users)
