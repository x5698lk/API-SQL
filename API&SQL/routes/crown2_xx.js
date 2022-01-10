var express = require('express');
var router = express.Router();

const crown2Controller = require('../controllers/crown2Controller_xx');

router.get('/', crown2Controller.getHomepage);

router.get('/shop_xx/:product', crown2Controller.getProductsByCategory);

module.exports = router;
