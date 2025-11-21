const { verifyToken } = require('../utils/auth');
const logger = require('../utils/logger');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    logger.error('Auth middleware error:', err);
    res.status(401).json({ error: 'Authentication failed' });
  }
};

module.exports = auth;