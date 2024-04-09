const express = require('express');
const dataController = require('../Controllers/dataController');
const authMiddleware = require('../Middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware, dataController.createData);
router.put('/:id', authMiddleware, dataController.updateData);
router.get('/count', authMiddleware, dataController.getDataCount);

module.exports = router;