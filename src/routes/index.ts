import { Request, Response, Router } from 'express';
import * as ColorController from '../controllers/colorController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo!' });
});

router.get('/colors', ColorController.getColors);
router.get('/color/:id', ColorController.getColor);
router.get('/colors/favorite', ColorController.getFavoriteColors);
router.post('/colors', ColorController.createColor);
router.patch('/color/:id', ColorController.updateColor);
router.delete('/color/:id', ColorController.deleteColor);

export default router;
