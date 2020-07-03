const {Router} = require('express');
const router = Router();

const {indexController, postMessage, receiveMessage} = require('../controllers/index.controller');

// Main routes
router.get('/', indexController);

// Send an sms
router.post('/send-sms', postMessage);

// Received an SMS
router.post('/sms', receiveMessage);

module.exports = router;