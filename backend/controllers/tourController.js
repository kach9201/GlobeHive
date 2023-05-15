


import Tour from '../models/Tour.js';
import User from '../models/User.js';

export const createTour = async (req, res) => {

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

};

export const updateTour = async (req, res) => {

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
};
export const deleteTour = async (req, res) => {

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
};

export const getSingleTour = async (req, res) => {

    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate('reviews');
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
};

export const getAllTour = async (req, res) => {


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
};

export const getTourSearch = async (req, res) => {


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
        }).populate('reviews');

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve all tours',
        });
    }
};
export const getFeaturedTour = async (req, res) => {


    try {
        const tour = await Tour.find({ featured: true }).populate('reviews').limit(8);

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
};

export const getTourCount = async (req, res) => {

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
};

export default { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourSearch, getFeaturedTour, getTourCount }

