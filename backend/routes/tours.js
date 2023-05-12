
import express from 'express';
import {
    createTour,
    deleteTour,
    updateTour,
    getSingleTour,
    getAllTour,
    getFeaturedTour,
    getTourSearch,
    getTourCount
} from '../controllers/tourController.js';

const router = express.Router();

router.post('/', createTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);
router.get('/:id', getSingleTour);
router.get('/:id', getAllTour);
router.get("search/getTourBySearch", getTourSearch);
router.get("search/getFeaturedTours", getFeaturedTour);
router.get("search/getTourCount", getTourCount);

export default router;
