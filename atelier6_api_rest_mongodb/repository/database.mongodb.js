import mongoose from 'mongoose';
import config from "config";

mongoose.connect(config.get('DatabaseMongo.url'));

const userSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

const users = mongoose.model('User', userSchema, 'users');

export default users;

