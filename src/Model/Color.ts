import { Schema, model, connection, Model } from 'mongoose';

type ColorType = {
  name: string;
  hex: string;
  isFavorite: boolean;
};

const schema = new Schema<ColorType>(
  {
    name: { type: String, required: true },
    hex: { type: String, required: true },
    isFavorite: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const modelName = 'Color';

const colorModel =
  connection && connection.models[modelName]
    ? (connection.models[modelName] as Model<ColorType>)
    : model<ColorType>(modelName, schema, 'color');

export default colorModel;
