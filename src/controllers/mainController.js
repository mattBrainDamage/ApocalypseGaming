// Modules
const fs = require('fs');
const path = require('path');

const db = require('../database/models/')
const sequelize = db.sequelize;

const Op = db.Sequelize.Op;


// Constants
const userFilePath = path.join(__dirname, '../data/users.json');

// Helper Functions
function getAllUsers() {
	let usersFileContent = fs.readFileSync(userFilePath, 'utf-8');
	let finalUsers = usersFileContent == '' ? [] : JSON.parse(usersFileContent);
	return finalUsers;
}

function getUserById(id) {
	let allUsers = getAllUsers();
	let userById = allUsers.find(oneUser => oneUser.id == id);
	return userById;
}

const controller = {
	index: (req, res) => {
		let userLogged = getUserById(req.session.userId);
		db.Games
			.findAll({
				where: {
					rating : {  [Op.gt]: 9 }
				},
				include : [{association : 'genre'}]
			})
			.then(products => {


				/*res.render('index', { userLogged });*/

				return res.render('index', {products, userLogged});
		 	})
			.catch(error => console.log(error));

		/*let userLogged = getUserById(req.session.userId);
		res.render('index', { userLogged },{products});*/
	},
	about: (req,res)=>{
		res.render('about')
	},
	contact: (req,res)=>{
		res.render('contact')
	},
	storeContact: (req,res)=>{
		db.Contacts.create(req.body);
		return res.redirect('/');
	}
};

module.exports = controller