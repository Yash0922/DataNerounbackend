const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
    const payload = {
      id: user._id,
      username: user.username,
    };
  
    const options = {
      expiresIn: '1h',
    };
  
    return jwt.sign(payload, 'My_name_yash', options);
  };

exports.verifyToken = (token) => {
  return jwt.verify(token, 'My_name_yash');
};