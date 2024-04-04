import express from "express";
import CategoryService from "../service/category.service.js";
import {HttpResponse} from "../models/httpresponse.model.js";

const router = express.Router();

export class CategoryController {

    async getCategories(req, resp, next) {
        try {
            const userList = await CategoryService.fetchAll();
            resp.status(200).json(new HttpResponse(userList, null));
        } catch (error) {
            next(error);
        }
    }

    async getCategory(req, resp, next) {
        try {
            const idParam = parseInt(req.params.id);
            const user = await CategoryService.fetchById(idParam);
            resp.status(200).json(user);
            if (!user) {
                resp.status(404).json({message: `category ${idParam} not found`});
            }
        } catch (error) {
            next(error);
        }
    }

    async addCategory(req, resp) {
        const {name} = req.body;
        const createdCategory = await CategoryService.createCategory(name);
        resp.status(201).json(createdCategory);
    }

    async deleteCategory(req, resp, next) {
        try {
            const idParam = parseInt(req.params.id);
            let isDeleted = await CategoryService.deleteCategory(idParam);

            if (isDeleted) {
                resp.status(204).send();
            } else {
                resp.status(404).json({message: `Category ${idParam} not found`});
            }
        } catch (error) {
            next(error);
        }
    }
}

const categoryController = new CategoryController();

// Définition des routes par rapport aux méthodes du controller
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.post('/', categoryController.addCategory);
router.delete('/:id', categoryController.deleteCategory);
// router.put()

export default router;
