exports.capitalizeName = function(name){
    if(!name){
        throw Error('Invalid input type', name);
    }
    var _name = name.toLowerCase().trim();
    return _name[0].toUpperCase() + _name.slice(1);
}

exports.isValidEmail = function(email){
    var email = email.toLowerCase().trim();
    var regExPatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regExPatter.test(email) ? true : false;
}