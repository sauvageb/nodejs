import CategoryRepository from "../repository/category.repository.js";

class CategoryService {

    async fetchById(id) {
        return await CategoryRepository.findById(id);
    }

    async fetchAll() {
        return await CategoryRepository.findAll();
    }
}

export default new CategoryService();
