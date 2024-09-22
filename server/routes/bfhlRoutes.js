import { Router } from 'express';
import { postBfhl, getBfhl } from '../controllers/bfhlController.js';

const router = Router();

// POST /bfhl
router.post('/', postBfhl);

// GET /bfhl
router.get('/', getBfhl);

export default router;
