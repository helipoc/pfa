const { PrismaClient } = require('@prisma/client');
const DAO = new PrismaClient();

async function CreateColis(desc, poid, addressDelv, NameDelv, clientId) {
  try {
    await DAO.colis.create({
      data: {
        desc,
        poid,
        addressDelv,
        NameDelv,
        clientId,
      },
    });
    return {
      success: true,
      msg: 'colis created',
    };
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

module.exports = {
  CreateColis,
};
