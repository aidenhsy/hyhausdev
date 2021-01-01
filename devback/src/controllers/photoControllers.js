import asyncHandler from 'express-async-handler';
import Photo from '../models/Photo.js';

export const getPhotos = asyncHandler(async (req, res) => {
  const photos = await Photo.find().populate('user', '_id name city image');
  res.json(photos);
});

export const countUserPhotos = asyncHandler(async (req, res) => {
  const qty = await Photo.count({ user: req.user._id });
  res.json(qty);
});
