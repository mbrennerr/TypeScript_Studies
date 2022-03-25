// ./index.ts

import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import { MiddlewareError } from './middleware';
import { BooksRoutes } from './Routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
	res.status(StatusCodes.OK).send('Express + TypeScript');
});
app.use(BooksRoutes);
app.use(MiddlewareError);

console.log(`Server is running at http://localhost:${PORT}`);
app.listen(PORT, () => {});
