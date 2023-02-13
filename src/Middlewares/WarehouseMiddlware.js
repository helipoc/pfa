const jwt = require('jsonwebtoken');

function JWTcheck(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'warehouse', (error, obj) => {
      if (error) {
        return res.sendStatus(403);
      }
      req.wh_id = parseInt(obj.wh_id);
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = JWTcheck;
