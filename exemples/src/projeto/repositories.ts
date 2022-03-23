import { Category } from "./model"

export class BaseRepository<Model, TypeID> {

    findAll (): Model[] {
        return []
    }

    create (obj: Model) {}

    findOne (id: TypeID) : Model | undefined {
        return undefined
    }

}

class CategoryRepository extends BaseRepository<Category, number> {

}

const obj = new CategoryRepository()
const result = obj.findAll().forEach(() => {
    
})






