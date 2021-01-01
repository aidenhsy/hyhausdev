import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
const Router = express.Router();

import { getPhotos, countUserPhotos } from '../controllers/photoControllers.js';

Router.route('/').get(getPhotos);
Router.route('/count').get(protect, countUserPhotos);

export default Router;
