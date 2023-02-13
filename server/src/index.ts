import cors from 'cors';
import express from 'express';
import { config } from './config';

const app = express();
app.use(cors());

app.get('/', (_req, res) => res.send('Hello there !'));

app.listen(config.PORT, () => console.log(`Server runnning ${config.PORT}`));
