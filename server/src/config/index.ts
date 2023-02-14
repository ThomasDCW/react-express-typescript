import { Config } from '../types/interfaces';
require('dotenv').config();

export const config: Config = {
  PORT: process.env.PORT,
};
