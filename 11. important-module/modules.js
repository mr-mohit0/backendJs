//module 1
const http = require('http');
http.createServer((req, res) => { }).listen(3000, () => { });

//module2

const getCurrentDate = () => new Date().toISOString();
//this also an exporting modules
const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Method 1: Exporting multiple items
exports.getCurrentDate = getCurrentDate;
exports.formatCurrency = formatCurrency;



//module 3

const http = require('http');
const path = require('path');

// Importing custom modules
const { getCurrentDate, formatCurrency } = require('./utils');
const Logger = require('./logger');


