import express from "express";
import CategoryService from "../service/category.service.js";

const router = express.Router();

export class CategoryController {

    async getCategories(req, resp) {
        try {
            const userList = await CategoryService.fetchAll();
            resp.status(200).json(userList);
        } catch (error) {
            resp.status(500).json({message: 'Erreur'})
        }
    }

    async getCategory(req, resp) {
        try {
            const idParam = parseInt(req.params.id);
            const user = await CategoryService.fetchById(idParam);
            resp.status(200).json(user);
            if (!user) {
                resp.status(404).json({message: `category ${idParam} not found`});
            }
        } catch (error) {
            resp.status(500);
        }
    }

    async addCategory(req, resp) {
        const {name} = req.body;
        const createdCategory = await CategoryService.createCategory(name);
        resp.status(201).json(createdCategory);
    }
}

const categoryController = new CategoryController();

// Définition des routes par rapport aux méthodes du controller
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.post('/', categoryController.addCategory);
// router.delete('/:id', categoryController.deleteCategory);
// router.put()
export default router;
