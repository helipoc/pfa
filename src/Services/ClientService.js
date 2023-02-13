const { PrismaClient } = require('@prisma/client');
const DAO = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function createClient(email, password, tel, address) {
  try {
    let hash = await bcrypt.hash(password, 10);
    await DAO.client.create({
      data: {
        email,
        password: hash,
        tel,
        address,
      },
    });
    return {
      success: true,
      msg: 'client created',
    };
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function login(email, password) {
  try {
    let cl = await DAO.client.findUniqueOrThrow({ where: { email } });
    let b = bcrypt.compareSync(password, cl.password);
    if (b) {
      return {
        token: jwt.sign({ cli_id: cl.id }, 'client'),
      };
    }
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
  return {
    success: false,
    msg: 'email/password incorrect',
  };
}

module.exports = {
  createClient,
  login,
};
