const db = require('../database/models/')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

// Modules
const fs = require('fs');





/*
let gifResource = require('../requests/gifResource')

gifResource.random().then(results=>{
	console.log(results)
}).catch(error=>{res.send(error)})
*/

const productsController = {

	index: (req, res) => {
			db.Games
				.findAll()
				.then(games => {
					return res.render('products/products', { games });
				 })
				.catch(error => console.log(error));
		

	},
	
	
	create: (req, res) => {
		
		
		if(res.locals.userLogged.category=='admin'){
			sequelize
			.query('SELECT * FROM genres')
			.then(genresInDB => {
				return res.render('products/productCreate', { genres: genresInDB[0] });
			})
			.catch(error => console.log(error))
		} else {
			res.redirect('/products')
		}
			
			
			
	},

	show: (req, res) => {
			db.Games
				.findByPk(
					req.params.id,
					{
						// include: ['genre']
					}
				)
				.then(game => {
					console.log(game)
					return res.render('products/productDetail', { game, title: game.game_name  });
				})
				.catch(error => console.log(error));
	},

	store: (req, res) => {

		req.body.image = req.file.filename;

		db.Games.create(req.body);
		return res.redirect('/products');
	},

	edit: (req, res) => {



		db.Games
			.findByPk(req.params.id)
			.then(game => {
				// Antes de enviar el juego al formulario, vamos a traer los géneros
				sequelize
					.query('SELECT * FROM genres')
					.then(genresInDB => {
						return res.render('products/productEdit', { game, genres: genresInDB[0] });
					})
			})
			.catch(error => console.log(error));
	},
	
	update: (req, res) => {
		req.body.image = req.file.filename;
		db.Games
			.update(
				req.body,
				{
					where: {
						id: req.params.id
					}
				}
			)
			.then(() => res.redirect('/products'));
	},
	destroy: (req, res) => {
		db.Games
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(() => res.redirect('/products'));
	}	
}


module.exports = productsController ;


/*


const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

module.exports = {
	index: (req, res) => {
		db.Movies
			.findAll()
			.then(movies => {
				return res.render('movies/index', { movies });
		 	})
			.catch(error => console.log(error));
	},
	show: (req, res) => {
		db.Movies
			.findByPk(
				req.params.id,
				{
					include: ['genre', 'actors']
				}
			)
			.then(movie => {
				return res.render('movies/detail', { movie, title: movie.title  });
			})
			.catch(error => console.log(error));
	},
	create: (req, res) => {
		sequelize
			.query('SELECT * FROM genres')
			.then(genresInDB => {
				return res.render('movies/create', { genres: genresInDB[0] });
			})
			.catch(error => console.log(error))
	},
	store: (req, res) => {
		db.Movies.create(req.body);
		return res.redirect('/movies');
	},
	destroy: (req, res) => {
		db.Movies
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(() => res.redirect('/movies'));
	},
	edit: (req, res) => {
		db.Movies
			.findByPk(req.params.id)
			.then(movie => {
				// Antes de enviar al peli a al formulario, vamos a traer los géneros
				sequelize
					.query('SELECT * FROM genres')
					.then(genresInDB => {
						return res.render('movies/edit', { movie, genres: genresInDB[0] });
					})
			})
			.catch(error => console.log(error));
	},
	update: (req, res) => {
		db.Movies
			.update(
				req.body,
				{
					where: {
						id: req.params.id
					}
				}
			)
			.then(() => res.redirect('/movies'));
	},
	find: (req, res) => {
		db.Movies.findAll({
			where: {
				title: { [Op.like]: `%${req.query.title}%` },
			}
		})
			.then(resultados => {
				if (resultados.length > 0) {
					return res.send(resultados);
				} else {
					return res.send('No hay resultados');
				}

			})
			.catch(error => console.log(error));
	}
}

*/