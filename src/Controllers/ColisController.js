const ColisService = require('../Services/ColisService');

async function createColisController(req, res) {
  let { desc, poid, addressDelv, NameDelv, city, clientId } = req.body;
  let result = await ColisService.CreateColis(
    desc,
    poid,
    addressDelv,
    NameDelv,
    city,
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

module.exports = {
  createColisController,
  getColisByCityController,
};
