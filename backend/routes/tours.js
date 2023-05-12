
const express = require('express');
const {
    createTour,
    deleteTour,
    updateTour,
    getSingleTour,
    getAllTour,
    getFeaturedTour,
    getTourSearch,
    getTourCount
} = require('../controllers/tourController.js');

const router = express.Router();

router.post('/', createTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);
router.get('/:id', getSingleTour);
router.get('/:id', getAllTour);
router.get("search/getTourBySearch", getTourSearch);
router.get("search/getFeaturedTours", getFeaturedTour);
router.get("search/getTourCount", getTourCount);

module.exports = router;
