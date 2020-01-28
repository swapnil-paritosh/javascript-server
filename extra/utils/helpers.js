export function validateEmail(email) {
    let regex = /^([a-zA-Z0-9_\-\.]+)@(successive.tech)$/gm;
    if (regex.test(email)) {
        return true;
    }
    else {
        return false;
    }

}