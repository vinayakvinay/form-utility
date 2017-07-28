exports.capitalizeName = capitalizeName;
exports.isValidEmail = isValidEmail;
exports.isValidName = isValidName;
exports.isValidPhoneNumber = isValidPhoneNumber;
exports.isValidNumber = isValidNumber;
exports.hasSpecialChar = hasSpecialChar;


function capitalizeName(name) {
    if (!name) {
        throw Error('Invalid input type', name);
    }
    var _name = name.toLowerCase().trim();
    return _name[0].toUpperCase() + _name.slice(1);
}

function isValidEmail(email) {
    var email = email.toLowerCase().trim();
    var regExPatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regExPatter.test(email) ? true : false;
}

function isValidName(name) {
    var regEx = /^[A-Za-z]+$/;
    return regEx.test(name);
}

function isValidPhoneNumber(phoneNum) {
    return (phoneNum.length <= 12 && phoneNum.length >= 10) && isValidNumber(phoneNum);
}

function isValidNumber(number){
    return /^[0-9]+$/.test(number);
}

function hasSpecialChar(char){
    return /[^a-z\d\s]+/gi.test(char);
}