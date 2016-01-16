var express = require('express');
var router = express.Router();
var imageController = require('./controllers/images');

router.post('/images', imageController.upload);

module.exports = router;