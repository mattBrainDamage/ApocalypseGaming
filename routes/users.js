// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

/* GET - users page. */
router.get('/', usersController.index);
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.post('/useredit/:idUser', usersController.edit);

router.put('/useredit/',(req,res)=>{
    res.send('Enviado por PUT');
})

router.post('/register', usersController.store);


module.exports = router;
