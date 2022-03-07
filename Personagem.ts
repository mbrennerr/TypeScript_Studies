//nome, energy, life, ataque, defense;

//class
class Personagem {
  name: string="";
  energy: number=0;
  life: number=0;
  atack: number=0;
  defense: number =0;

  // constructor() {
  //   this.energy =  50;
  //   this.atack = 50;
  // }
}

let sansa: Personagem
sansa = new Personagem();
sansa.name = 'Sansa Stark'
sansa.atack = 10;
sansa.defense = 20;
sansa.energy = 50;
sansa.life = 100;
console.log("personagem :>>", sansa);

let johnson: Personagem = new Personagem
johnson.atack = 80;
johnson.defense = 20;




