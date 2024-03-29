const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'VOTRE_SECRET');
    req.user = { email: decoded.email, _id: decoded.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentification échouée' });
  }
};
