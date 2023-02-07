const ClientServices = require('../Services/ClientService');

function loginController(req, res) {
  res.send(ClientServices.loginService());
}

function signupController(req, res) {
  res.send(ClientServices.SignupService());
}

module.exports = {
  loginController,
  signupController,
};
