"use strict";
var STATU;
(function (STATU) {
    STATU[STATU["teste"] = 0] = "teste";
})(STATU || (STATU = {}));
class Carro {
    constructor(velocidade, cor) {
        this._velocidade = velocidade;
        this._cor = cor;
        this.status = STATU.teste;
    }
    buzinar() {
        console.log('BIIII');
    }
    // vamos aproveitar e modificar os métodos para usarem nossa variável:
    freiar() {
        console.log('VRRUUuummmm');
        this._velocidade - 10;
        console.log(`O carro agora reduziu a ${this._velocidade}`);
    }
}
const obj1 = new Carro(50, "vermelho");
console.log(obj1._cor);
