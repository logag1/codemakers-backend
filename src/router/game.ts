import { Router } from 'express';
import { GameController } from '../controller/game.controller';
import { asyncHandler } from '../utilities/async-handler';

const router = Router();

router
  .route('/submit')
  .post(asyncHandler(GameController.submit))

router
  .route('/ranking')
  .get(asyncHandler(GameController.getRanking))

export default router;