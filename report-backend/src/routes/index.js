const express = require('express')
const router = express.Router()
const { indexController, generateReportAndSendEmailController } = require('../controllers')
  
router.get('/', indexController);
router.post('/generateReport', generateReportAndSendEmailController);

module.exports = router;