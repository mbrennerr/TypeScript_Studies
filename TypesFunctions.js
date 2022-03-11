var lowd = function (value) {
    if (typeof value === 'string')
        return value.toUpperCase();
    else if (typeof value === 'number')
        return value.toString().toUpperCase();
    return "";
};
console.log(lowd(1));
console.log(lowd("teste"));
