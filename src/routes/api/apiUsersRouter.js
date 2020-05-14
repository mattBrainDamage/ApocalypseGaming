// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const apiUsersController = require('../../controllers/api/apiUsersController')
/* GET - products page. */
router.get('/', apiUsersController.index);
router.get('/:id', apiUsersController.find);


module.exports = router;