const express = require('express');
const Router = express.Router();
const Controller = require('../Controllers/ColisController');
const jwtWarehouse = require('../Middlewares/WarehouseMiddlware');
const jwtClient = require('../Middlewares/ClientMiddlware');
const jwtDelv = require('../Middlewares/DeliveryMiddlware');

Router.post('/create', jwtClient, Controller.createColisController);
Router.get('/city/:city', Controller.getColisByCityController);
Router.get(
  '/city/change/:colis_id',
  jwtWarehouse,
  Controller.changeColisCityController
);
Router.get('/colis_client', jwtClient, Controller.clientColisController);
Router.get('/colis_delv', jwtDelv, Controller.deliveryColisController);
Router.get('/colis_wrhouse', jwtWarehouse, Controller.wrhouseColisController);

module.exports = Router;
