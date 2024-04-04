import getConnection from "./database.js";

class CategoryRepository {

    async findById(id) {
        return this.categories.find(c => c.id === id);
    }

    async findAll() {
        return Promise.resolve(this.categories);
    }

    async create(newCategory) {
        const connection = await getConnection();
        const [result] = await connection.execute('INSERT INTO categories (name) VALUES (?)', [newCategory.name]);
        newCategory.id = result.insertId;
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
