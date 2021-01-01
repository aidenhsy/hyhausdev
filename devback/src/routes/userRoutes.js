import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
const Router = express.Router();

import {
  register,
  login,
  getUserProfile,
  updateUserProfile,
  getUserPublicProfile,
} from '../controllers/userControllers.js';

Router.route('/').post(register);
Router.route('/login').post(login);
Router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
Router.route('/:id').get(getUserPublicProfile);

export default Router;
