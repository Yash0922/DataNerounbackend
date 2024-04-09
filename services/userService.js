const User = require('../models/User.model');
const bcrypt = require('bcrypt');

exports.createUser = async (username, password) => {
  try {
    const user = new User({ username });
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

exports.verifyUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.hash(password, user.password))) {
      throw new Error('Invalid username or password');
    }
    return user;
  } catch (error) {
    throw error;
  }
};