"use strict";
//nome, energy, life, ataque, defense;
//class
class Personagem {
    constructor() {
        this.name = "";
        this.energy = 0;
        this.life = 0;
        this.atack = 0;
        this.defense = 0;
        // constructor() {
        //   this.energy =  50;
        //   this.atack = 50;
        // }
    }
}
let sansa;
sansa = new Personagem();
sansa.name = 'Sansa Stark';
sansa.atack = 10;
sansa.defense = 20;
sansa.energy = 50;
sansa.life = 100;
console.log("personagem :>>", sansa);
let johnson = new Personagem;
johnson.atack = 80;
johnson.defense = 20;
