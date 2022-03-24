"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const setUnits = [
    'milimetro',
    'centimentro',
    'decimentro',
    'metro',
    'decâmetro',
    'hectometro',
    'quilometro',
];
const convert = (valor, Ubase, Uconvertion) => {
    let indexBase = setUnits.indexOf(Ubase);
    let indexConvertion = setUnits.indexOf(Uconvertion);
    let indexResult = indexBase - indexConvertion;
    let result = Math.pow(10, indexResult) * valor;
    return result;
};
exports.convert = convert;
console.log((0, exports.convert)(3, 'hectometro', 'metro'));
