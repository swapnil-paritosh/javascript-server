// let users=[
// {
// traineeEmail: 'trainee1@successive.tech',
// reviewerEmail: 'reviewer1@successive.tech',
// },
// {
// traineeEmail: 'swapnil@successive.tech',
// reviewerEmail: 'vikas@successive.tech',
// },
// {
// traineeEmail: 'shiva@success.tech',
// reviewerEmail: 'vikas@successive.tech',
// }
// ]

let valid = 0, invalid = 0;
// function validateEmail(email) {
//     let regex = /^([a-zA-Z0-9_\-\.]+)@(successive.tech)$/gm;
//     if (regex.test(email)) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }
import { validateEmail } from './helpers'

export default function validateUsers(users: any[]) : void {
    for (let i = 0; i < users.length; i++) {
        //destructuring
        let { traineeEmail, reviewerEmail } = users[i];
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            console.log("Valid: " + traineeEmail + " & " + reviewerEmail)
            valid++;
        }
        else {
            console.log("Invalid: " + traineeEmail + " & " + reviewerEmail)
            invalid++;
        }
    }
    console.log("Number of valid users " + valid + "\nNumber of invalid users " + invalid)
}

// validateUsers(users)