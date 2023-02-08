const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/ColisController');
Router.post('/create', Controller.createColisController);
Router.get('/city/:city', Controller.getColisByCityController);

module.exports = Router;
