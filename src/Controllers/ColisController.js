const ColisService = require('../Services/ColisService');

async function createColisController(req, res) {
  let { desc, poid, addressDelv, NameDelv, clientId } = req.body;
  let result = await ColisService.CreateColis(
    desc,
    poid,
    addressDelv,
    NameDelv,
    clientId
  );
  res.json(result);
}

module.exports = {
  createColisController,
};
