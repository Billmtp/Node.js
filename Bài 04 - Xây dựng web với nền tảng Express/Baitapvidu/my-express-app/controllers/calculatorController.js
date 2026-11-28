const express = require('express');
const router = express.Router();
const calculatorModel = require('../models/calculatorModel');

// Route GET hiển thị giao diện máy tính
router.get('/', (req, res) => {
  res.render('calculator');
});

// Route POST thực hiện tính toán
router.post('/calculate', (req, res, next) => {
  const { num1, num2, operation } = req.body;
  const result = calculatorModel.calculate(num1, num2, operation);
  if (isNaN(result)) {
    const err = new Error('Invalid input');
    err.status = 400;
    return next(err);
  }
  res.render('calculator', { result });
});

module.exports = router;
