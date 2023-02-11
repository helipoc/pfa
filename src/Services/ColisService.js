const { PrismaClient } = require('@prisma/client');
const DAO = new PrismaClient();

async function CreateColis(desc, poid, addressDelv, NameDelv, city, clientId) {
  try {
    await DAO.colis.create({
      data: {
        desc,
        poid,
        addressDelv,
        NameDelv,
        city,
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

async function getColisByCity(city) {
  try {
    let data = await DAO.colis.findMany({
      where: {
        city,
        state: 'NEW',
      },
    });
    return data;
  } catch (e) {
    return {
      success: true,
      msg: 'colis created',
    };
  }
}

module.exports = {
  CreateColis,
  getColisByCity,
};
