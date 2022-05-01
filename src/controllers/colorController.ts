import { Request, Response } from 'express';
import mongoose from 'mongoose';
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

export const getColor = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Id inválido' });
    return;
  }

  const color = await Color.findById(id);

  if (!color) {
    res.status(404).json({ message: 'Cor não encontrada' });
    return;
  }

  res.json(color);
};

export const updateColor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Id inválido' });
    return;
  }

  let color = await Color.findById(id);

  if (!color) {
    res.status(404).json({ message: 'Cor não encontrada' });
    return;
  }

  Object.assign(color, newData);

  const updatedColor = await color.save();
  return res.status(200).json(updatedColor);
};

export const getFavoriteColors = async (req: Request, res: Response) => {
  const colors = await Color.find({ isFavorite: true });
  res.json(colors);
};

export const deleteColor = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Id inválido' });
    return;
  }

  const color = await Color.findById(id);

  if (!color) {
    res.status(404).json({ message: 'Cor não encontrada' });
  }

  await color?.remove();

  res.json({ message: 'Cor excluída com sucesso' });
};
