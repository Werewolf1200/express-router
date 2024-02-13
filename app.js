/*

1. npm init -y -> Inicia node y crea package.json
2. npm i express -> intalar express

*/

import express from "express";
import appRouter from "./routes/router.js";

const app = express();

const port = 3000;

app.use(express.json());

app.use(appRouter);

app.listen(port, () => {
   console.log(`La API está funcionando en http://localhost:${port}`)  
});