interface Ave<T, R, S> {
    penas: true;
    bico: true;
    dente: S
    ovipara: R
    locomocao: T
}

interface PropriedadesEmu {
    corrida: boolean;
}

type Comida2 = boolean;

const emu2: Ave<Comida2, string, number> = {
    penas: true,
    bico: true,
    dente: 10,
    ovipara: "yes",
    locomocao: true
}