const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers ['authorization'] || req.headers['Authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'Acceso denegado: se requiere token' });
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.replace('Bearer ', '')
    : null;

  if (!token) {
    return res.status(401).json({ error: 'Formato de token inválido' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};
