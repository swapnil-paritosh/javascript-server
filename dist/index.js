"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./pattern/index");
const index_2 = require("./utils/index");
const index_3 = require("./utils/index");
const constants_1 = require("./constants");
index_1.diamond(5);
index_1.equilateral(5);
console.log(index_2.hasPermission("getUsers", "trainee", "read"));
index_3.validateUsers(constants_1.users);
//# sourceMappingURL=index.js.map