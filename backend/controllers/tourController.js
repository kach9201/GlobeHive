


const Tour = require('../models/Tour.js');
const User = require('../models/User.js');
module.exports = {

    async createTour(req, res) {
        const newTour = new Tour(req.body);

        try {
            const savedTour = await newTour.save();

            res.status(200).json({
                success: true, message: 'Successfully created a new tour',
                data: savedTour
            });
        } catch (err) {
            res.status(500).json({
                success: false, message: 'Failed to create a new tour',
                error: err
            });
        }

    },

    async updateTour(req, res) {
        const id = req.params.id;
        try {
            const updatedTour = await Tour.findByIdAndUpdate(id, {
                $set: req.body
            }, { new: true });
            res.status(200).json({
                success: true,
                message: 'Successfully updated a tour',
                data: updatedTour,
            });


        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Failed to update a tour',

            });
        }
    },
    async deleteTour(req, res) {
        const id = req.params.id;
        try {
            const deletedTour = await Tour.findByIdAndDelete(id);
            res.status(200).json({
                success: true,
                message: 'Successfully deleted a tour',
            });

        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Failed to delete a tour',
            });
        }
    },
    async getSingleTour(req, res) {
        const id = req.params.id;
        try {
            const tour = await Tour.findById(id);
            res.status(200).json({
                success: true,
                message: 'Successfully retrieved a tour',
                data: tour
            });

        } catch (err) {
            res.status(404).json({
                success: false,
                message: 'Failed to retrieve a tour',
            });
        }
    },
    async getAllTour(req, res) {

        const page = parseInt(req.query.page);

        try {
            const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);
            res.status(200).json({
                success: true,
                count: tours.length,
                message: 'Successfully retrieved all tours',
                data: tours,
            });

        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve all tours',
            });
        }
    },


    async getTourSearch(req, res) {

        const city = new RegExp(req.query.city, 'i');
        const distance = parseInt(req.query.distance);
        const maxGroupSize = parseInt(req.query.maxGroupSize)

        try {
            const tour = Tour.find({
                city, distance: { $gte: distance },
                maxGroupSize: { $gte: maxGroupSize }
            });
            res.status(200).json({
                success: true,
                count: tour.length,
                message: 'Successfully retrieved all tours',
                data: tour,
            });

        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve all tours',
            });
        }
    },

    async getFeaturedTour(req, res) {

        try {
            const tour = await Tour.find({ featured: true }), limit = (8);

            res.status(200).json({
                success: true,
                count: tour.length,
                message: 'Successfully retrieved Featured tours',
                data: tour,
            });
        } catch (err) {
            res.status(404).json({
                success: false,
                message: 'Failed to retrieve Featured tours',
            });
        }
    },

    async getTourCount(req, res) {
        try {

            const tourCount = await Tour.estimatedDocumentCount();
            res.status(200).json({
                success: true,
                data: tourCount,
                message: 'Successfully Counted all tours',
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Failed to Counted all tours',
            });
        }
    }
}
