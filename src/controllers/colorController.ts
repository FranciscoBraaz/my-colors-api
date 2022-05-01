import { Request, Response } from 'express';
import Color from '../Model/Color';

export const getColors = async (req: Request, res: Response) => {
  const colors = await Color.find({});

  res.json(colors);
};

export const createColor = async (req: Request, res: Response) => {
  const color = req.body;

  if (!color.name) {
    res.status(400).json({ message: 'É obrigatório passar o nome da cor' });
    return;
  }

  if (!color.hex) {
    res
      .status(400)
      .json({ message: 'É obrigatório passar o hexadecimal da cor' });
    return;
  }

  const createdColor = await Color.create(color);

  res.status(201).json(createdColor);
};

// const getColor = async (req: Request, res: Response) => {
//   const {id} = req.params;

//   const color = await Color.findById
// }
