const express = require('express');
const Router = express.Router();
const jwt = require('../Middlewares/WarehouseMiddlware');
const Controller = require('../Controllers/WarehouseController');
Router.post('/create', Controller.createWareController);
Router.post('/login', Controller.loginController);
Router.get('/stored_colis', jwt, Controller.storeInwarehouseController);

module.exports = Router;
