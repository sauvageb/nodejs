import {categories} from "./database.js";

class CategoryRepository {

    async findById(id) {
        // const connection = await getConnection();
        // try {
        //     const [rows] = await connection.execute('SELECT * FROM categories WHERE id = ?', [id]);
        //     if (rows.length > 0) {
        //         return new Category(rows[0].id, rows[0].name);
        //     }
        //     return null;
        // } finally {
        //     await connection.release();
        // }
    }

    async findAll() {
        // const connection = await getConnection();
        // try {
        //     const [rows] = await connection.execute('SELECT * FROM categories');
        //     return rows.map(row => new Category(row.id, row.name));
        // } finally {
        //     await connection.release();
        // }
    }

    async create(newCategory) {
        try {
            const createdCategory = await categories.create({
                name: newCategory.name
            });
            return createdCategory;
        } catch (error) {
            console.error('Error during insert category', error);
            throw error;
        }
    }

    async delete(id) {
        // const connection = await getConnection();
        // try {
        //     const [result] = await connection.execute('DELETE FROM categories WHERE id = ?', [id]);
        //     return result.affectedRows > 0;
        // } finally {
        //     await connection.release();
        // }
    }
}

export default new CategoryRepository();
