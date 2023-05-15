
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

export const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo
    });

    await newUser.save();

    res.status(200).json({ success: true, message: 'User created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create user' });
  }

};
export const login = async (req, res) => {
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

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15d' }
    );

    res.cookie('accessToken', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days
    }).status(200).json({ token, data: { ...rest }, role });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to login' });
  }
};


export default { register, login };



