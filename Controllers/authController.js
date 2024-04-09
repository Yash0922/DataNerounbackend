const userService = require('../services/userService');
const { generateToken } = require('../Utils/auth');

exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await userService.createUser(username, password);
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await userService.verifyUser(username, password);
    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};

