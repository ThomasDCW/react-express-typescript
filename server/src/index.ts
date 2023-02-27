import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from './config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.use(cors());

// users routes

app.get('/users', async (_req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.get('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const userById = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(userById);
});

/// posts routes

app.get('/posts', async (_req: Request, res: Response) => {
  const allPosts = await prisma.post.findMany();
  res.json(allPosts);
});

app.get('/post/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const postById = await prisma.post.findUnique({ where: { id: Number(id) } });
  res.json(postById);
});

app.listen(config.PORT, () =>
  console.log(`Server runnning http://localhost:${config.PORT}`)
);
