const express = require('express');
const Router = express.Router();
const jwtWarehouse = require('../Middlewares/WarehouseMiddlware');
const Controller = require('../Controllers/WarehouseController');
Router.post('/create', Controller.createWareController);
Router.post('/login', Controller.loginController);
Router.get(
  '/stored_colis',
  jwtWarehouse,
  Controller.storeInwarehouseController
);
Router.get(
  '/need_change',
  jwtWarehouse,
  Controller.needWarehouseChangeController
);

module.exports = Router;
