exports.capitalizeName = function(name){
    if(!name){
        throw Error('Invalid input type', name);
    }
    var _name = name.toLowerCase().trim();
    return _name[0].toUpperCase() + _name.slice(1);
}