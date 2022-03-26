
const setUnits:string[] = 
[
'milimetro',
'centimentro',
'decimentro',
'metro',
'decâmetro',
'hectometro',
'quilometro',
]

export const convert =(valor: number, Ubase:string, Uconvertion: string):number =>{
let indexBase = setUnits.indexOf(Ubase)
let indexConvertion = setUnits.indexOf(Uconvertion)
let indexResult = indexBase - indexConvertion
let result = Math.pow(10,indexResult)*valor

return result;
}
console.log(convert(3,'hectometro','metro'));
