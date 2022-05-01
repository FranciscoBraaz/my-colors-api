import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function mongoConnect() {
  try {
    await connect(process.env.MONGO_URL as string);
    console.log('MongoDB conectado!');
  } catch (error) {
    console.log('Erro ao conectar-se com o MongoDB:', error);
  }
}
