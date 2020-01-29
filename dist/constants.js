"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permission = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};
exports.users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'swapnil@successive.tech',
        reviewerEmail: 'vikas@successive.tech',
    },
    {
        traineeEmail: 'shiva@success.tech',
        reviewerEmail: 'vikas@successive.tech',
    }
];
//# sourceMappingURL=constants.js.map