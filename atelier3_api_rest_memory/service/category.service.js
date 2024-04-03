import CategoryRepository from "../repository/category.repository.js";
import {Category} from "../repository/entity/category.entity.js";

// Business Layer
class CategoryService {

    async fetchById(id) {
        return await CategoryRepository.findById(id);
    }

    async fetchAll() {
        return await CategoryRepository.findAll();
    }

    async createCategory(name) {
        const newCategory = new Category(null, name);
        return await CategoryRepository.create(newCategory);
    }
}

export default new CategoryService();
