import express from 'express';
import { createShare, deleteShare, getAllShares, getShare, updateShare } from '../controllers/shareController.js';
import { shareMiddleware } from '../middleware/shareMiddleware.js';

const shareRoutes = express.Router();

shareRoutes.get('/', getAllShares);
shareRoutes.get('/:id', getShare);
shareRoutes.post('/', shareMiddleware,createShare);
shareRoutes.delete('/:id', deleteShare)
shareRoutes.put('/:id', updateShare)
export default shareRoutes;