import Tour from '../models/Tour.js';
import Review from '../models/Review.js';



const createReview = async (req, res) => {


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

};

export default createReview;