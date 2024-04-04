import getConnection from "./database.js";
import {Category} from "./entity/category.entity.js";

class CategoryRepository {

    async findById(id) {
        const connection = await getConnection();
        try {
            const [rows] = await connection.execute('SELECT * FROM categories WHERE id = ?', [id]);
            if (rows.length > 0) {
                return new Category(rows[0].id, rows[0].name);
            }
            return null;
        } finally {
            await connection.release();
        }
    }

    async findAll() {
        const connection = await getConnection();
        try {
            const [rows] = await connection.execute('SELECT * FROM categories');
            return rows.map(row => new Category(row.id, row.name));
        } finally {
            await connection.release();
        }
    }

    async create(newCategory) {
        const connection = await getConnection();
        try {
            const [result] = await connection.execute('INSERT INTO categories (name) VALUES (?)', [newCategory.name]);
            newCategory.id = result.insertId;
            return newCategory;
        } finally {
            await connection.release();
        }
    }

    async delete(id) {
        const connection = await getConnection();
        try {
            const [result] = await connection.execute('DELETE FROM categories WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } finally {
            await connection.release();
        }
    }
}

export default new CategoryRepository();
