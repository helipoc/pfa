const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/ClientController');
Router.post('/signup', Controller.createClientController);
Router.post('/login', Controller.loginController);

module.exports = Router;
