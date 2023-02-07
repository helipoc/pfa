const { PrismaClient } = require('@prisma/client');
const DAO = new PrismaClient();

async function CreateUser(email, password, tel, address) {
  try {
    await DAO.user.create({
      data: {
        email,
        password,
        tel,
        address,
      },
    });
    return {
      success: true,
      msg: 'user created',
    };
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

module.exports = {
  CreateUser,
};
