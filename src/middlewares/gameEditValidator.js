const path = require('path');
const { check } = require('express-validator');

module.exports = [
	// Campo nombre

	
	check('game_name', 'Debe ingresar un nombre válido').isLength({ min: 2}),
    check('description', 'Debe ingresar una breve descripción').isLength({ min: 10}),
    check('price', 'No debe quedar vacío el campo').isLength({ min: 1}),
	check('image')
		.custom((value, { req }) => {
			let acceptedExtensions = ['.jpg', '.jpeg', '.png','.JPG', '.JPEG', '.PNG'];

				if (typeof req.file != 'undefined') {
					let fileExtension = path.extname(req.file.originalname);
					let extensionIsOk = acceptedExtensions.includes(fileExtension);
					if (!extensionIsOk) {
						throw new Error('Los formatos válidos son JPG, JPEG y PNG');
					}
				}
			return true;
		})
];