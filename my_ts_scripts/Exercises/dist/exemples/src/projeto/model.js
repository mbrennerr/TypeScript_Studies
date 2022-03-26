"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var STATUS;
(function (STATUS) {
    STATUS[STATUS["ativo"] = 0] = "ativo";
    STATUS[STATUS["inativo"] = 1] = "inativo";
})(STATUS || (STATUS = {}));
class Category {
    constructor() {
        this.status = STATUS.ativo;
    }
}
exports.Category = Category;
