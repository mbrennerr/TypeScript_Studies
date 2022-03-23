enum STATUS {
    ativo,
    inativo
}

export class Category {
    id: number | undefined
    name: string | undefined
    status: number = STATUS.ativo
}