module.exports = (sequelize, dataTypes) => {
	const Contact = sequelize.define('Contacts', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING
		},
		email: {
			type: dataTypes.STRING
        },
        msg: {
			type: dataTypes.STRING
		}
	});


	return Contact;
};