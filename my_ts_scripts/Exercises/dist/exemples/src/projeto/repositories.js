"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    findAll() {
        return [];
    }
    create(obj) { }
    findOne(id) {
        return undefined;
    }
}
exports.BaseRepository = BaseRepository;
class CategoryRepository extends BaseRepository {
}
const obj = new CategoryRepository();
const result = obj.findAll().forEach(() => {
});
