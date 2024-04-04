import express from 'express'
import categoryController from "./controller/category.controller.js";

const app = express();
// middlewares
// Ajoute le body à req.body (sinon req.body est undefined)
app.use(express.json());

app.use('/categories', categoryController);
// app.use('/tutorials', tutorialsController);

// Gestion des erreurs
app.use((error, req, resp, next) => {
    resp.status(error.status || 500).json({message: error.message || 'Internal server error'});
});


const PORT = 3000;
const HOSTNAME = 'localhost';
app.listen(PORT, HOSTNAME, async () => {
    console.log(`Server running on port http://${HOSTNAME}:${PORT}`)
});
