import express from "express";
import cors from "cors";
import time from "./time.js";
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.json('Hola');
});
app.get('/hora', (req, res) => {
    res.json('Hola');
});

export default app;