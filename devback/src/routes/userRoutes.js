import express from 'express';
const Router = express.Router();

import { register, login } from '../controllers/userControllers.js';

Router.route('/').post(register);
Router.route('/login').post(login);

export default Router;
