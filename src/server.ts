import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ApiRoutes from './routes';
import { mongoConnect } from './database/mongo';

dotenv.config();

mongoConnect();

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/api', ApiRoutes);
server.use((req, res) => {
  res.status(404).json({ message: 'Endpoint não encontrado' });
});

server.listen(process.env.PORT);
