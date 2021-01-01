import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../util/generateToken.js';

// @desc    Post user registration
// @route   POST /api/users
// @access  Public
export const register = asyncHandler(async (req, res) => {
  const { name, email, password, city } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(403);
    throw new Error('User already exists');
  }
  const user = await User.create({ name, email, password, city });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      city: user.city,
      isPhotographer: user.isPhotographer,
      token: generateToken(user._id),
    });
  } else {
    res.status(409);
    throw new Error('Something went wrong');
  }
});

// @desc    Put user registration
// @route   POST /api/users/login
// @access  Public
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      city: user.city,
      isPhotographer: user.isPhotographer,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      city: user.city,
      isPhotographer: user.isPhotographer,
    });
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      city: updatedUser.city,
      isPhotographer: updatedUser.isPhotographer,
    });
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});
