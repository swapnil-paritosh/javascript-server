export const permission =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}

export let users = [
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
]
