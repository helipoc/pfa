const DeliveryService = require('../Services/DeliveryService');

async function loginController(req, res) {
  let { email, password } = req.body;
  let result = await DeliveryService.login(email, password);
  res.json(result);
}

async function createDeliveryManController(req, res) {
  let { email, password, tel, city } = req.body;
  let result = await DeliveryService.createDeliv(email, password, tel, city);
  res.json(result);
}

async function pickColisFromClient(req, res) {
  let { colis_id } = req.params;
  let del_id = req.del_id;
  let result = await DeliveryService.pickColisFromClient(
    del_id,
    parseInt(colis_id)
  );
  res.json(result);
}

async function PickedFromClient(req, res) {
  let del_id = req.del_id;
  let result = await DeliveryService.getPickedFromClientColis(del_id);
  res.json(result);
}

async function pickColisFromWarehouse(req, res) {
  let { colis_id } = req.params;
  let del_id = req.del_id;
  let result = await DeliveryService.pickFromWareHouse(
    del_id,
    parseInt(colis_id)
  );
  res.json(result);
}

async function deliveredColis(req, res) {
  let { colis_id } = req.params;
  let result = await DeliveryService.deliveredColis(parseInt(colis_id));
  res.json(result);
}

async function PickedFromWareHouse(req, res) {
  let del_id = req.del_id;
  let result = await DeliveryService.getPickedFromWareHouse(del_id);
  res.json(result);
}

async function StoreInWarehouse(req, res) {
  let { colis_id } = req.params;
  let result = await DeliveryService.storeInWareHouse(parseInt(colis_id));
  res.json(result);
}

async function availableInWarehouse(req, res) {
  let { del_id } = req.del_id;
  let result = await DeliveryService.availableInWarehouse(del_id);
  res.json(result);
}

async function cancelColis(req, res) {
  let { colis_id } = req.params;
  let result = await DeliveryService.cancelColis(parseInt(colis_id));
  res.json(result);
}

module.exports = {
  loginController,
  createDeliveryManController,
  pickColisFromClient,
  PickedFromClient,
  pickColisFromWarehouse,
  PickedFromWareHouse,
  StoreInWarehouse,
  deliveredColis,
  availableInWarehouse,
  cancelColis,
};
