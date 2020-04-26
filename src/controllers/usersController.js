
const db = require('../database/models/')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


// Modules
const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const {check, validationResult, body} = require('express-validator');



// Controller Methods


const usersController = {

	index: (req, res) => {

			db.Users
			.findAll()
			.then(users => {
				return res.render('users/users', users);
			 })
			.catch(error => console.log(error));

	},
	register: (req, res) => {
		res.render('users/userRegister');
	},
	
	store: (req, res) => {		

/* a ver qué pasa */
		const hasErrorGetMessage = (field, errors) => {
			for (let oneError of errors) {
				if (oneError.param == field) {
					return oneError.msg;
				}
			}
			return false;
		}
		
		let errorsResult = validationResult(req);

		if ( !errorsResult.isEmpty() ) {
			return res.render('users/userRegister', {
				errors: errorsResult.array(),
				hasErrorGetMessage,
				oldData: req.body
			});

		} else {

			// Hash del password
			req.body.password = bcrypt.hashSync(req.body.password, 10);
			// Eliminar la propiedad re_password
			delete req.body.re_password;
			// Asignar el nombre final de la imagen
			req.body.avatar = req.file.filename;
			
			
			
			db.Users.create(req.body).then(user =>{
			
				req.session.user = user;
				res.locals.user = req.session.user;
				res.cookie('userCookie', user, { maxAge: 60000 * 60 });
				return res.redirect('profile');
			
			});
		}





/* a ver qué pasa */






	},

	login: (req, res) => {
		res.render('users/userLogin');
	},

	processLogin: (req, res) => {
		// Buscar usuario por email
		let errors = validationResult(req);

		if(errors.isEmpty()){

			db.Users.findOne({
				where : {
					email : req.body.email,
				}
				}).then(user => {
					// Si encontramos al usuario
					if (user != undefined) {
						// Al ya tener al usuario, comparamos las contraseñas
						
						if(bcrypt.compareSync(req.body.password, user.password)) {
							// Borro el password para no dejarlo en sesión y asigno el usuario a la sesión
							delete user.dataValues.password;
							req.session.user = user;
							 // Setear la cookie
							 if (req.body.remember_user) {
								 res.cookie('userCookie', req.session.user, { maxAge: 60000 * 60 });
							 }
	
						// Redireccionamos al visitante a su perfil
			
							 return res.redirect('profile');
	
			
						} else {
							let errors = [{msg: 'El usuario o la contraseña es invalida'}]
							res.render('users/userLogin', {errors});

						}
					} else {
						let errors = [{msg: 'El usuario o la contraseña es invalida'}]
						res.render('users/userLogin', {errors});

					}
	
				})
		} else {

			res.render('users/userLogin',{ errors : errors.errors})
		}
		

	},

	profile: (req, res) => {

		return res.render('users/userProfile', {userLogged : res.locals.userLogged});

	},
	edit: (req, res) => {


		return res.render('users/userEdit', {userLogged :res.locals.userLogged});

	},
	update: (req, res) => {

		const hasErrorGetMessage = (field, errors) => {
			for (let oneError of errors) {
				if (oneError.param == field) {
					return oneError.msg;
				}
			}
			return false;
		}

		let errorsResult = validationResult(req);

		if ( !errorsResult.isEmpty() ) {
			return res.render('users/userEdit', {
				errors: errorsResult.array(),
				hasErrorGetMessage,
				oldData: req.body
			});

		} else {

			// Asignar el nombre final de la imagen

			if(typeof req.file != 'undefined'){
				req.body.avatar = req.file.filename;
				req.session.user.avatar = req.body.avatar;
			}


			req.session.user.firstName = req.body.firstName;
			req.session.user.lastName = req.body.lastName;
			//req.session.user.email = req.body.email;
				db.Users.update(
					req.body,
					{
						where: {
							id: res.locals.userLogged.id
						}
					}
				).then(() =>{
					
					return res.redirect('profile');
			
				});
			
			}
			
			},
			
			logout: (req, res) => {
			// Destruir la session
			req.session.destroy();
			// Destruir la cookie
			res.cookie('userCookie', null, { maxAge: 1 });
			
			return res.redirect('/users/login');
		}
///




};

module.exports = usersController;
