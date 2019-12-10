// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get("/Electricidad", mainController.root);
router.get("/Plomeria", mainController.root);
router.get("/Herramientas", mainController.root);
router.get("/Construccion", mainController.root);
module.exports = router;
