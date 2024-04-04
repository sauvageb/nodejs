import config from "config";
import mysql from "mysql2/promise";

const {host, port, username, password, database, maxConnections} = config.get('Database');

const databaseConfig = {
    host: host,
    port: port,
    user: username,
    password: password,
    database: database,
    connectionLimit: maxConnections
};

const pool = mysql.createPool(databaseConfig);

async function getConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Connected to database!");
        return connection;
    } catch (error) {
        console.error("Error connecting ton database:", error);
    }
}

export default getConnection;



