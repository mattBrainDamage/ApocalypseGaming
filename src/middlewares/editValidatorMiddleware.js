const path = require('path');
const { check } = require('express-validator');

module.exports = [
	// Campo nombre

	
	check('firstName', 'El nombre es obligatorio').isLength({ min: 3}),

	check('avatar')
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