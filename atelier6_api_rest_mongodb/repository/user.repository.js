import users from "./database.mongodb.js";

class UserRepository {

    async findById(id) {
        try {
            return await users.findById(id);
        } catch (error) {
            console.error('Error during finding user by id', error);
            throw error;
        }
    }

    async findAll() {
        try {
            return await users.find();
        } catch (error) {
            console.error('Error during fetching users', error);
            throw error;
        }
    }

    async create(newUser) {
        try {
            const createdUser = await users.create({
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                password: newUser.password
            });
            return createdUser;
        } catch (error) {
            console.error('Error during insert user', error);
            throw error;
        }
    }

    async delete(idToDelete) {
        try {
            const userDeleted = await users.deleteOne({_id: idToDelete});
            return userDeleted.deletedCount > 0;

        } catch (error) {
            console.error('Error during delete', error);
            throw error;
        }
    }
}

export default new UserRepository();
