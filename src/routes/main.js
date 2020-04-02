// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.index);

router.get('/testSession', function(req,res){
    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas == 0;
    }
    req.session.numeroVisitas++;
    res.send('El número de visitas es: '+req.session.numeroVisitas);
});

router.get('/about', mainController.about);

router.get('/contact', mainController.contact);
router.post('/contact', mainController.storeContact);
module.exports = router;
