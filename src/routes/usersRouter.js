// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, path.join(__dirname, '../../public/images/avatars'));
	},
	filename: function(req, file, cb){
		console.log(req.body)
		let userName = req.body.firstName.replace(/ /g, '_').toLowerCase();
        let imageFinalName = userName + '_'+ Date.now() + path.extname(file.originalname);
        
        cb(null, imageFinalName);

	}
});

const upload = multer({ storage: diskStorage });


// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Middlewares ************
const userMiddleware = require('../middlewares/userMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const {check, validationResult, body} = require('express-validator');


const registerValidations = require('../middlewares/registerValidatorMiddleware');
const editValidations = require('../middlewares/editValidatorMiddleware');





/*Listar usuarios*/


router.get('/', userMiddleware, usersController.index);


/*Guardar usuarios */

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('avatar'), registerValidations, usersController.store);

/*Loguear usuario*/ 

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', [
	check('email').isEmail().withMessage('Formato de e-mail inválido'),
	check('password').isLength({min : 1}).withMessage('El campo Contraseña no puede estar vacío')
], usersController.processLogin);

/*Ir a perfil */ 
router.get('/profile', userMiddleware, usersController.profile);

/*Actualizar usuario*/

router.get('/edit', userMiddleware, usersController.edit);
router.put('/edit', upload.single('avatar'), editValidations, usersController.update);


router.get('/logout', usersController.logout);

module.exports = router;