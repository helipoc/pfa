const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/ClientController');
Router.use(express.json());
Router.post('/signup', Controller.createUserController);

module.exports = Router;
