import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler)
// Rota
// recurso = usuário
// Métodos HTTP = GET, POST, PUT, DELETE

// Parâmetros   Query Paramn:  http//localhost:3333/users?search=diego

// GET = BUSCAR UMA INFOMAÇÃO (LISTA, ITEM)
// POST = CRIANDO UMA INFORMAÇÃO
// PUT = EDITANDO UMA INFORMAÇÃO
// DELETE = DELETANDO UMA INFORMAÇÃO


app.listen(3333);