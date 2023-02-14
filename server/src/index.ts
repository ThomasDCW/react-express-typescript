import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from './config';

const app = express();
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello there !');
});

app.listen(config.PORT, () =>
  console.log(`Server runnning http://localhost:${config.PORT}`)
);
