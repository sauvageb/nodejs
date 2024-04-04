import express from "express";
import {HttpResponse} from "../models/httpresponse.model.js";
import userService from "../service/user.service.js";
import UserService from "../service/user.service.js";

const router = express.Router();

export class UserController {

    async getUsers(req, resp, next) {
        try {
            const userList = await UserService.fetchAll();
            resp.status(200).json(new HttpResponse(userList, null));
        } catch (error) {
            next(error);
        }
    }

    async getUser(req, resp, next) {
        try {
            const idParam = req.params.id;
            const user = await userService.fetchById(idParam);
            resp.status(200).json(user);
            if (!user) {
                resp.status(404).json({message: `user ${idParam} not found`});
            }
        } catch (error) {
            next(error);
        }
    }

    async addUser(req, resp) {
        const {firstname, lastname, email, password} = req.body;
        const createdUser = await UserService.create(firstname, lastname, email, password);
        resp.status(201).json(createdUser);
    }

    async deleteUser(req, resp, next) {
        try {
            const idParam = req.params.id;
            let isDeleted = await UserService.delete(idParam);

            if (isDeleted) {
                resp.status(204).send();
            } else {
                resp.status(404).json({message: `User ${idParam} not found`});
            }
        } catch (error) {
            next(error);
        }
    }
}

const userController = new UserController();

// Définition des routes par rapport aux méthodes du controller
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.addUser);
router.delete('/:id', userController.deleteUser);

export default router;
