import asyncHandler from 'express-async-handler';
import Photo from '../models/Photo.js';

export const getPhotos = asyncHandler(async (req, res) => {
  const photos = await Photo.find();
  res.json(photos);
});
