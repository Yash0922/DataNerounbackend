const Data = require('../models/Data.model');

exports.create = async (data) => {
  const newData = new Data(data);
  await newData.save();
  return newData;
};

exports.update = async (id, data) => {
  const updatedData = await Data.findByIdAndUpdate(id, data, { new: true });
  if (!updatedData) {
    throw new Error('Data not found');
  }
  return updatedData;
};

exports.getCount = async (userId) => {
  const addCount = await Data.countDocuments({ user: userId, name: { $exists: true } });
  const updateCount = await Data.countDocuments({ user: userId, value: { $exists: true } });
  return { addCount, updateCount };
};