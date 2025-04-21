import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.json('Bienvenido a la API de personas');
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});