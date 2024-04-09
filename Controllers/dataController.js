const dataService = require('../services/dataService');

exports.createData = async (req, res, next) => {
    const startTime = performance.now();
    try {
      const { name, value } = req.body;
      const data = await dataService.create({ name, value });
      const executionTime = performance.now() - startTime;
      res.status(201).json({ data, executionTime: `${executionTime.toFixed(2)} ms` });
    } catch (error) {
      next(error);
    }
  }
  exports.updateData = async (req, res, next) => {
    const startTime = performance.now();
    try {
      const { id } = req.params;
      const { name, value } = req.body;
      const data = await dataService.update(id, { name, value });
      const executionTime = performance.now() - startTime;
      res.json({ data, executionTime: `${executionTime.toFixed(2)} ms` });
    } catch (error) {
      next(error);
    }
  };
  exports.getDataCount = async (req, res, next) => {
    const startTime = performance.now();
    try {
      const counts = await dataService.getCount();
      const executionTime = performance.now() - startTime;
      res.json({ counts, executionTime: `${executionTime.toFixed(2)} ms` });
    } catch (error) {
      next(error);
    }
  };