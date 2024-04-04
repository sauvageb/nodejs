import config from "config";
import {Sequelize} from "sequelize";
import Category from "./entity/categories.js";

const {host, port, username, password, database, dialect} = config.get('Database');

const sequelize = new Sequelize(database, username, password, {
    dialect: dialect,
    host: host,
    port: port
});

// INITIALIZATION OF ENTITIES
const categories = Category.initialize(sequelize, Sequelize);
// END INITIALIZATION


// Connecting with sequelize
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Creating schema
try {
    await sequelize.sync({force: false});
    console.log("Tables synchronized successfully");
} catch (error) {
    console.error('Error synchronizing tables :', error);
}

export {categories};
