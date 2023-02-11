const jwt = require('jsonwebtoken');

function JWTdelivery(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'delivery', (error, obj) => {
      if (error) {
        return res.sendStatus(403);
      }
      req.del_id = parseInt(obj.del_id);
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = JWTdelivery;
