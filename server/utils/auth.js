const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.secret);
  } catch (err) {
    return null;
  }
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePasswords = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

module.exports = {
  generateToken,
  verifyToken,
  hashPassword,
  comparePasswords
};