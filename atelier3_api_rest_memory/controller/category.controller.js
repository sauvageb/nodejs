import express from "express";
import CategoryService from "../service/category.service.js";

const router = express.Router();

export class CategoryController {


    async getCategories(req, resp) {
        try {
            const userList = await CategoryService.fetchAll();
            resp.json(userList);
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
            resp.status(500).json({message: 'Erreur'})
        }
    }
}

const categoryController = new CategoryController();
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);

export default router;
