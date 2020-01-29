"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let moduleName=process.argv[2]
// let role=process.argv[3]
// let permissionType=process.argv[4]
const constants_1 = require("./../constants");
function hasPermission(moduleName, role, permissionType) {
    for (let i = 0; i < constants_1.permission[moduleName][permissionType].length; i++) {
        if (constants_1.permission[moduleName][permissionType][i].match(role)) {
            return true;
        }
    }
    return false;
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map