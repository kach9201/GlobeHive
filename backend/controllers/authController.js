
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async register(req, res) {
        try {

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            const neUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                photo: req.body.photo
            })
            await neUser.save();
            res.status(200).json({ success: true, message: 'User created' });

        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to create' });
        }
    },
    async login(req, res) {

        const email = req.body.email;
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(401).json({ success: false, message: 'User not found' });
            }
            const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);
            if (!checkCorrectPassword) {
                return res.status(401).json({ success: false, message: 'Wrong password' });
            }

            const { password, role, ...rest } = user._doc;
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY,
                { expiresIn: '15d' }
            );

            res.cookie('accessToken', token, {
                httpOnly: true,
                expires: token.expiresIn
            }).status(200).json({ token, data: { ...rest }, role });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to login' });
        }
    }
}



