import {Category} from "./entity/category.entity.js";

class CategoryRepository {

    categories = [
        new Category(1, 'Javascript'),
        new Category(2, 'Node.js'),
        new Category(3, 'Java'),
        new Category(4, 'C#'),
        new Category(5, 'Typescript'),
        new Category(6, 'PHP'),
        new Category(7, 'Angular'),
        new Category(8, 'Ruby'),
        new Category(9, 'Python'),
        new Category(10, 'C++'),
        new Category(11, 'Rust'),
        new Category(12, 'VBA')
    ];

    async findById(id) {
        return this.categories.find(c => c.id === id);
    }

    async findAll() {
        return Promise.resolve(this.categories);
    }

    async create(newCategory) {
        newCategory.id = this.categories.length + 1;
        this.categories.push(newCategory);
        return Promise.resolve(newCategory);
    }

    async delete(id) {
        if (this.categories.find(c => c.id === id)) {
            this.categories = this.categories.filter(c => c.id !== id);
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
}

export default new CategoryRepository();
