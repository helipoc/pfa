const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const DAO = new PrismaClient();

async function login(email, password) {
  try {
    let wh = await DAO.warehouse.findUniqueOrThrow({ where: { email } });

    let b = bcrypt.compareSync(password, wh.password);
    if (b) {
      return {
        token: jwt.sign({ wh_id: wh.id }, 'warehouse'),
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
async function createWarehouse(email, password, city) {
  try {
    let hash = await bcrypt.hash(password, 10);
    await DAO.warehouse.create({
      data: {
        email,
        password: hash,
        city: city.toUpperCase(),
      },
    });
    return {
      success: true,
      msg: 'warehouse created',
    };
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function storedInWarehouse(wr_id) {
  try {
    let warehouse = await DAO.warehouse.findUnique({ where: { id: wr_id } });
    let colisInWarehouse = await DAO.colis.findMany({
      where: { city: warehouse.city, state: 'STORED_IN_WAREHOUSE' },
    });
    return colisInWarehouse;
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

async function needWarehouseChange(wr_id) {
  try {
    let warehouse = await DAO.warehouse.findFirstOrThrow({
      where: { id: wr_id },
    });
    let colisInWarehouse = await DAO.colis.findMany({
      where: {
        NOT: {
          city: warehouse.city,
        },
        state: 'STORED_IN_WAREHOUSE',
      },
    });
    return colisInWarehouse;
  } catch (e) {
    return {
      success: false,
      msg: e.message,
    };
  }
}

module.exports = {
  createWarehouse,
  login,
  storedInWarehouse,
  needWarehouseChange,
};
