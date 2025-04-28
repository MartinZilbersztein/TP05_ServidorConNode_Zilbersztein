import express from "express";
import cors from "cors";
import {ObtenerHora, ObtenerFechaCompleta} from "./time.js";
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json('¡Hola, y bienvenido a un servidor express con Node!');
});
app.get('/hora', (req, res, next) => {
    res.status(200).send(ObtenerHora());
});
app.get('/fecha-completa', (req, res) => {
    res.status(200).send(ObtenerFechaCompleta());
});
app.use(function(error, request, response, next) {
    // Handle the error
    response.status(500).send('Internal Server Error');
});
app.use(req, res, next => {
    return res.status(404).send(`<img src="https://http.cat/images/404.jpg">`);
})
//para el extra: middleware
export default app;
