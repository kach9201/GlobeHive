import User from "../models/User.js";


export const createUser = async (req, res) => {

    const newUser = new User(req.body);
    try {
        const savedUser = newUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: savedUser,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error creating user",
            error: err,
        });
    }
};

export const updateUser = async (req, res) => {

    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({
            success: true,
            message: 'Successfully updated a user',
            data: updatedUser,
        });


    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update a user',

        });
    }
};

export const deleteUser = async (req, res) => {


    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Successfully deleted a user',
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete a user',
        });
    }
};

export const getSingleUser = async (req, res) => {

    const id = req.params.id;
    try {
        const user = await Tour.findById(id);
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved a user',
            data: user
        });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Failed to retrieve a user',
        });
    }
};

export const getAllUser = async (req, res) => {

    try {
        const users = await Tour.find({});
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved all users',
            data: users,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve all users',
        });
    }
};

export default { createUser, updateUser, deleteUser, getSingleUser, getAllUser }
