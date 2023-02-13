const express = require('express');
const jwt = require('../Middlewares/DeliveryMiddlware');
const Router = express.Router();
const Controller = require('../Controllers/DeliveryService');
Router.post('/create', Controller.createDeliveryManController);
Router.post('/login', Controller.loginController);
Router.get('/picked_client', jwt, Controller.PickedFromClient);
Router.get('/pick_client/:colis_id', jwt, Controller.pickColisFromClient);
Router.get('/pick_warehouse/:colis_id', jwt, Controller.pickColisFromWarehouse);
Router.get('/picked_warehouse', jwt, Controller.PickedFromWareHouse);
Router.get('/store_warehouse/:colis_id', jwt, Controller.StoreInWarehouse);
Router.get('/deliverd/:colis_id', jwt, Controller.deliveredColis);

module.exports = Router;
