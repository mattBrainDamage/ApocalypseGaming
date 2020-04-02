// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');



/*const {check, validationResult, body} = require('express-validator');*/


const diskStorage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, path.join(__dirname, '../../public/images/avatars'));
	},
	filename: function(req, file, cb){
		let userName = req.body.full_name.replace(/ /g, '_').toLowerCase();
        let imageFinalName = userName + '_'+ Date.now() + path.extname(file.originalname);
        
        cb(null, imageFinalName);
        
	}
});

const upload = multer({ storage: diskStorage });



// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middlewares ************
const authMiddleware = require('../middlewares/authMiddleware');

const guestMiddleware = require('../middlewares/guestMiddleware');


/*Listar usuarios*/


router.get('/', usersController.index);


router.get('/register', guestMiddleware, usersController.register);


router.post('/register', upload.single('avatar'), usersController.store);


router.get('/login', guestMiddleware, usersController.login);


router.post('/login', usersController.processLogin);


router.get('/profile', authMiddleware, usersController.profile);


router.get('/logout', usersController.logout);

module.exports = router;