// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');



const diskStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images/products/games'));
    },

	filename: function(req, file, cb){
        let productName = req.body.game_name;
        let imageFinalName = productName + '_'+ Date.now() + path.extname(file.originalname);
        
        cb(null, imageFinalName);
	}
});

const upload = multer({ storage: diskStorage });


// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ************ Middlewares ************
const editValidations = require('../middlewares/gameEditValidator');

const {check, validationResult, body} = require('express-validator');


// Validator

// req.checkBody('image', '').isImage(imageFile);



/* GET - products page. */
router.get('/', productsController.index);

// /* Detalle de Juego. */
router.get('/detail/:id', productsController.show);

 /* Creación de un Juego */
 router.get('/create',productsController.create);
 router.post('/create', upload.single('image'), productsController.store);

/* Edición de un juego */
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', upload.single('image'), editValidations, productsController.update);

 /* Eliminación de un juego */ 

router.delete('/delete/:id', productsController.destroy);

// /* Juego por título. */
// router.get('/find-by-title', controller.find);

// module.exports = router;




module.exports = router;
