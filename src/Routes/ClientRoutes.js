const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/ClientController');
Router.get('/login', Controller.loginController);
Router.get('/signup', Controller.signupController);

module.exports = Router;
