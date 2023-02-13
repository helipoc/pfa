const ColisService = require('../Services/ColisService');

async function createColisController(req, res) {
  let clientId = req.cli_id;
  let { desc, poid, addressDelv, NameDelv, city, cityDelv } = req.body;
  let result = await ColisService.CreateColis(
    desc,
    poid,
    addressDelv,
    NameDelv,
    city,
    cityDelv,
    clientId
  );
  res.json(result);
}

async function getColisByCityController(req, res) {
  let { city } = req.params;
  console.log(city);
  let result = await ColisService.getColisByCity(city);
  res.json(result);
}

async function changeColisCityController(req, res) {
  let { colis_id } = req.params;
  let result = await ColisService.changeColisCity(parseInt(colis_id));
  res.json(result);
}
async function clientColisController(req, res) {
  let { cli_id } = req.cli_id;
  let result = await ColisService.clientColis(cli_id);
  res.json(result);
}
async function deliveryColisController(req, res) {
  let { del_id } = req.del_id;
  let result = await ColisService.delvColis(del_id);
  res.json(result);
}
async function wrhouseColisController(req, res) {
  let { wh_id } = req.wh_id;
  let result = await ColisService.clientColis(wh_id);
  res.json(result);
}
module.exports = {
  createColisController,
  getColisByCityController,
  changeColisCityController,
  clientColisController,
  deliveryColisController,
  wrhouseColisController,
};
