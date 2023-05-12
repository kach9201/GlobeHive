


import Tour from '../models/Tour.js';

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

}