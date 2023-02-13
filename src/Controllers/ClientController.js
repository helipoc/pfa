const ClientServices = require('../Services/ClientService');

async function createClientController(req, res) {
  let { email, password, tel, address } = req.body;
  let result = await ClientServices.createClient(email, password, tel, address);
  res.json(result);
}

async function loginController(req, res) {
  let { email, password } = req.body;
  let result = await ClientServices.login(email, password);
  res.json(result);
}

module.exports = {
  createClientController,
  loginController,
};
