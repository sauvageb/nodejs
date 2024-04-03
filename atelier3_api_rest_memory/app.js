import express from 'express'
import categoryController from "./controller/category.controller.js";

const app = express();

app.use('/categories', categoryController);

const PORT = 3000;
const HOSTNAME = 'localhost';
app.listen(PORT, HOSTNAME, async () => {
    console.log(`Server running on port http://${HOSTNAME}:${PORT}`)
});
