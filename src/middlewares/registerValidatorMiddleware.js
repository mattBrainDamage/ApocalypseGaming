const path = require('path');
const { check } = require('express-validator');

module.exports = [
	// Campo nombre
	check('firstName', 'El nombre es obligatorio').notEmpty(),

	// Campo email
	check('email')
		.notEmpty().withMessage('El email es obligatorio').bail()
		.isEmail().withMessage('Escribí un e-mail válido'),

	// Campo password
	check('password')
		.notEmpty().withMessage('Escribí una contraseña').bail()
		.isLength({ min: 4 }).withMessage('La contraseña debe tener como mínimo 4 caracteres'),
	
		// Campo avatar
	check('avatar')
		.custom((value, { req }) => {
			let acceptedExtensions = ['.jpg', '.jpeg', '.png'];
			if (typeof req.file == 'undefined') {
				throw new Error('Elegí una imagen de perfil');
			} else if (req.file.originalname) {
				let fileExtension = path.extname(req.file.originalname);
				let extensionIsOk = acceptedExtensions.includes(fileExtension);
				if (!extensionIsOk) {
					throw new Error('Los formatos válidos son JPG, JPEG y PNG');
				}
			}
			return true;
		})
];