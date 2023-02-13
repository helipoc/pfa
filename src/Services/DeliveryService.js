const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DAO = new PrismaClient();

async function login(email, password) {
  try {
    let del = await DAO.deliveryman.findUnique({ where: { email } });
    let b = bcrypt.compareSync(password, del.password);
    if (b) {
      return {
        token: jwt.sign({ del_id: del.id }, 'delivery'),
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
    msg: 'password incorrect',
  };
}
async function createDeliv(email, password, tel, city) {
  try {
    let hash = await bcrypt.hash(password, 10);
    await DAO.deliveryman.create({
      data: {
        email,
        password: hash,
        tel,
        city,
      },
    });
    return {
      success: true,
      msg: 'deliveryman created',
    };
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function pickColisFromClient(del_id, colis_id) {
  try {
    await DAO.colis.update({
      where: { id: colis_id },
      data: {
        state: 'PICKED_FROM_CLIENT',
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

async function storeInWareHouse(colis_id) {
  try {
    let colis = await DAO.colis.findFirstOrThrow({ where: { id: colis_id } });
    let wr = await DAO.warehouse.findFirstOrThrow({
      where: { city: colis.city },
    });
    await DAO.colis.update({
      where: { id: colis_id },
      data: {
        state: 'STORED_IN_WAREHOUSE',
        deliverymanId: null,
        warehouseId: wr.id,
      },
    });
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function pickFromWareHouse(del_id, colis_id) {
  try {
    await DAO.colis.update({
      where: { id: colis_id },
      data: {
        state: 'PICKED_FROM_WAREHOUSE',
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

async function getPickedFromClientColis(del_id) {
  try {
    return await DAO.colis.findMany({
      where: { deliverymanId: del_id, state: 'PICKED_FROM_CLIENT' },
    });
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function getPickedFromWareHouse(del_id) {
  try {
    return await DAO.colis.findMany({
      where: { deliverymanId: del_id, state: 'PICKED_FROM_WAREHOUSE' },
    });
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function deliveredColis(colis_id) {
  try {
    await DAO.colis.update({
      where: { id: colis_id },
      data: {
        state: 'DELIVERED',
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
  createDeliv,
  login,
  pickColisFromClient,
  storeInWareHouse,
  pickFromWareHouse,
  deliveredColis,
  getPickedFromWareHouse,
  getPickedFromClientColis,
};
