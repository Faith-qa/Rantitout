import { Router } from 'express';
const router = Router();

import createAffirmation from '../controllers/openaiController';

import { protect } from '../middleware/authMiddleware';
router.post('/Affirmations', createAffirmation)

export default router;