"use strict";
const lowd = (value) => {
    // if (typeof value === 'string')
    //   return value.toUpperCase();
    // else if (typeof value === 'number')
    //   return value.toString().toUpperCase();
    return value.toString().toUpperCase();
};
console.log(lowd(1)); //funciona;
console.log(lowd("teste")); //funciona;
console.log(lowd(false)); //funciona;
