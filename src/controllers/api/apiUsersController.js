const db = require('../../database/models')
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


const apiUsersController = {

	index: (req, res) => {
			db.Users		
	.findAll(
        
           {
               order: [
                ['id', 'DESC']
               ],
               attributes: ['id','firstName', 'email']
           }
       )
       .then(users => {

           let result = {  
			metadata: {
				url: req.originalUrl,
				quantity: users.length
			},

			data: users
		}
		return res.send(result);
	})
	.catch(error => console.log(error)); 
		

	},
	find: (req, res) => {
		db.Users
			.findByPk(
				req.params.id
			)
			.then(users => {
				return res.send(users.firstName);
			})
			.catch(error => console.log(error));
	},	

}


module.exports = apiUsersController ;