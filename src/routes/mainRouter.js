// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.index);


router.get('/about', mainController.about);

router.get('/contact', mainController.contact);
router.post('/contact', mainController.storeContact);

module.exports = router;
