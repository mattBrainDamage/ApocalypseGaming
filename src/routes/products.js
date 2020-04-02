// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/* GET - products page. */
router.get('/', productsController.index);



// /* Detalle de Juego. */
// router.get('/detail/:id', controller.show);

 /* Creación de un Juego */
 router.get('/create', productsController.create);
 router.post('/create', productsController.store);

/* Edición de un juego */
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

 /* Eliminación de un juego */ 

router.delete('/delete/:id', productsController.destroy);

// /* Juego por título. */
// router.get('/find-by-title', controller.find);

// module.exports = router;




module.exports = router;
