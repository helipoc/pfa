const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/ClientController');
Router.post('/signup', Controller.createClientController);

module.exports = Router;
