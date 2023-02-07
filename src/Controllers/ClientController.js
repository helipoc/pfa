const ClientServices = require('../Services/ClientService');

async function createUserController(req, res) {
  let { email, password, tel, address } = req.body;
  let result = await ClientServices.CreateUser(email, password, tel, address);
  res.json(result);
}

module.exports = {
  createUserController,
};
