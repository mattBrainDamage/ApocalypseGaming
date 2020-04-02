module.exports = (sequelize, dataTypes) => {
	const Contact = sequelize.define('Contacts', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		contact_name: {
			type: dataTypes.STRING
		},
		contact_email: {
			type: dataTypes.STRING
        },
        contact_msg: {
			type: dataTypes.STRING
		},
	}, {
		// tableName: 'Contacts'
		timestamps: false
	});


	return Contact;
};