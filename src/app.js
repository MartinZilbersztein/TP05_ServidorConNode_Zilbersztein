import express from "express";
import cors from "cors";
import {ObtenerHora, ObtenerFechaCompleta} from "./time.js";
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json('¡Hola, y bienvenido a un servidor express con Node!');
});
app.get('/hora', (req, res) => {
    res.send(ObtenerHora())
});
app.get('/fecha-completa', (req, res) => {
    res.send(time.toDateString() + " " +  time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
});

//para el extra: middleware
export default app;