const jwt = require('jsonwebtoken');

function JWTcheck(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'client', (error, obj) => {
      if (error) {
        return res.sendStatus(403);
      }
      req.cli_id = parseInt(obj.cli_id);
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = JWTcheck;
