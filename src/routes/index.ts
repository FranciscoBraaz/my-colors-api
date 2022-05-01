import { Request, Response, Router } from 'express';
import * as ColorController from '../controllers/colorController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo!' });
});

router.get('/colors', ColorController.getColors);
router.post('/colors', ColorController.createColor);

export default router;
