const WarehouseService = require('../Services/WarehouseService');

async function createWareController(req, res) {
  let { email, password, city } = req.body;
  let result = await WarehouseService.createWarehouse(email, password, city);
  res.json(result);
}

async function loginController(req, res) {
  let { email, password } = req.body;
  let result = await WarehouseService.login(email, password);
  res.json(result);
}

async function storeInwarehouseController(req, res) {
  let wh_id = req.wh_id;
  let result = await WarehouseService.storedInWarehouse(wh_id);
  res.json(result);
}

async function needWarehouseChangeController(req, res) {
  let wh_id = req.wh_id;
  let result = await WarehouseService.needWarehouseChange(wh_id);
  res.json(result);
}

module.exports = {
  createWareController,
  loginController,
  storeInwarehouseController,
  needWarehouseChangeController,
};
