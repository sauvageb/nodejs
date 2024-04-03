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
        return Promise.resolve(this.categories.filter(c => c.id === id));
    }

    async findAll() {
        return Promise.resolve(this.categories);
    }
}

export default new CategoryRepository();
