import express from 'express';
const Router = express.Router();

import { getPhotos } from '../controllers/photoControllers.js';

Router.route('/').get(getPhotos);

export default Router;
