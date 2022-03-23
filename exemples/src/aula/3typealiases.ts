type Comida = string;
const refeicao: Comida = 'Macarronada';

type Habilidades = {
    artisticas: Boolean,
    culinarias: Boolean,
}

type Pessoa = {
    nome: string,
    idade: number,
    habilidades: Habilidades,
}

let objP: Pessoa = {
    nome: 'Daniel',
    idade: 43,
    habilidades: {
      artisticas: true,
      culinarias: true,
    }
};

