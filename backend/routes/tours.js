
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

const verifyAdmin = require('../utils/verifyToken.js');

const router = express.Router();

router.post('/', verifyAdmin, createTour);
router.put('/:id', verifyAdmin, updateTour);
router.delete('/:id', verifyAdmin, deleteTour);
router.get('/:id', getSingleTour);
router.get('/:id', getAllTour);
router.get("search/getTourBySearch", getTourSearch);
router.get("search/getFeaturedTours", getFeaturedTour);
router.get("search/getTourCount", getTourCount);

module.exports = router;
