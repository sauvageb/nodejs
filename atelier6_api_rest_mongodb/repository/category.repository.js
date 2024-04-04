import {categories} from "./database.js";

class CategoryRepository {

    async findById(id) {
        try {
            return await categories.findByPk(id);
        } catch (error) {
            console.error('Error during insert category', error);
            throw error;
        }
    }

    async findAll() {
        try {
            return await categories.findAll();
        } catch (error) {
            console.error('Error during insert category', error);
            throw error;
        }
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

    async delete(idToDelete) {
        try {
            const categoryDeleted = await categories.destroy({
                where: {id: idToDelete}
            });

            return categoryDeleted > 0;

        } catch (error) {
            console.error('Error during insert category', error);
            throw error;
        }
    }
}

export default new CategoryRepository();
