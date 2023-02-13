const { PrismaClient } = require('@prisma/client');
const DAO = new PrismaClient();

async function CreateColis(
  desc,
  poid,
  addressDelv,
  NameDelv,
  city,
  cityDelv,
  clientId
) {
  try {
    await DAO.colis.create({
      data: {
        desc,
        poid,
        addressDelv,
        NameDelv,
        cityDelv: cityDelv.toUpperCase(),
        city: city.toUpperCase(),
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
      success: false,
      msg: e.message,
    };
  }
}

async function changeColisCity(colis_id) {
  try {
    let cl = await DAO.colis.findUniqueOrThrow({ where: { id: colis_id } });
    let new_warehouse = await DAO.warehouse.findFirstOrThrow({
      where: { city: cl.cityDelv },
    });
    await DAO.colis.update({
      where: { id: colis_id },
      data: {
        city: cl.cityDelv,
        warehouseId: new_warehouse.id,
      },
    });
    return {
      success: true,
      message: 'changed colis location',
    };
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function clientColis(cli_id) {
  try {
    return await DAO.colis.findMany({
      where: {
        clientId: cli_id,
      },
    });
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function delvColis(del_id) {
  try {
    return await DAO.colis.findMany({
      where: {
        deliverymanId: del_id,
      },
    });
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}
async function wrColis(wr_id) {
  try {
    return await DAO.colis.findMany({
      where: {
        warehouseId: wr_id,
      },
    });
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

module.exports = {
  CreateColis,
  getColisByCity,
  changeColisCity,
  clientColis,
  delvColis,
  wrColis,
};
