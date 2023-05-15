
import express from 'express';
import {
    createTour,
    deleteTour,
    updateTour,
    getSingleTour,
    getAllTour,
    getFeaturedTour,
    getTourSearch,
    getTourCount,
} from '../controllers/tourController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyAdmin, createTour);
router.put('/:id', verifyAdmin, updateTour);
router.delete('/:id', verifyAdmin, deleteTour);
router.get('/:id', getSingleTour);
router.get('/:id', getAllTour);
router.get("search/getTourBySearch", getTourSearch);
router.get("search/getFeaturedTours", getFeaturedTour);
router.get("search/getTourCount", getTourCount);

export default router;
