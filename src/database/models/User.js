module.exports = (sequelize, dataTypes) => {
	const User = sequelize.define('Users', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		firstName: {
			type: dataTypes.STRING
        },
        lastName: {
			type: dataTypes.STRING
		},
		email: {
			type: dataTypes.STRING
        },
        password: {
			type: dataTypes.STRING
		},
		category: {
			type: dataTypes.STRING
		},
		avatar: {
			type: dataTypes.STRING
		},
	}, {
		// tableName: 'Contacts'
		timestamps: false
	});


	return User;
};