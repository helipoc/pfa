const { PrismaClient } = require('@prisma/client');
const DAO = new PrismaClient();

async function createClient(email, password, tel, address) {
  try {
    await DAO.client.create({
      data: {
        email,
        password,
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

module.exports = {
  createClient,
};
