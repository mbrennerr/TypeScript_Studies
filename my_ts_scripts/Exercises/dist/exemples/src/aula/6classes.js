"use strict";
var STATU;
(function (STATU) {
    STATU[STATU["teste"] = 0] = "teste";
})(STATU || (STATU = {}));
class Carro {
    constructor(velocidade, cor) {
        this.velocidade = velocidade;
        this.cor = cor;
        this.status = STATU.teste;
    }
    buzinar() {
        console.log('BIIII');
    }
    // vamos aproveitar e modificar os métodos para usarem nossa variável:
    freiar() {
        console.log('VRRUUuummmm');
        this.velocidade - 10;
        console.log(`O carro agora reduziu a ${this.velocidade}`);
    }
}
const obj1 = new Carro(50, "vermelho");
console.log(obj1.cor);
