const Tour = require('../models/Tour.js');
const Review = require('../models/Review.js');


module.exports = {

    async createReview(req, res) {

        const tourId = req.params.tourId;
        const newReview = new Review({ ...req.body })
        try {
            const saveReview = await newReview.save();

            await Tour.findByIdAndUpdate(tourId, {
                $push: { reviews: saveReview._id }
            });

            res.status(200).json({ success: true, message: 'Review created successfully', data: saveReview });


        } catch (error) {

            res.status(500).json({ success: false, message: 'Error creating review' });
        }




    }
};