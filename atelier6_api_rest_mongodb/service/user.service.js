import UserRepository from "../repository/user.repository.js";

// Business Layer
class UserService {

    async fetchById(id) {
        let userFound = await UserRepository.findById(id);
        if (userFound) {
            return Promise.resolve(userFound);
        } else {
            return Promise.reject(new Error(`User id=${id} not found`));
        }
    }

    async fetchAll() {
        return await UserRepository.findAll();
    }

    async create(firstname, lastname, email, password) {
        const newUser = {
            firstname,
            lastname,
            email,
            password
        };
        return await UserRepository.create(newUser);
    }

    async delete(id) {
        return await UserRepository.delete(id);
    }
}

export default new UserService();
