const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/ColisController');
Router.post('/create', Controller.createColisController);

module.exports = Router;
