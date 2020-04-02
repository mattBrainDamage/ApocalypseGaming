module.exports = (sequelize, dataTypes) => {
	const Genre = sequelize.define('Genres', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		genre_name: {
			type: dataTypes.STRING
		},
	}, {
		timestamps: false // createAt / updateAt
	});

	// Relaciones 
	Genre.associate = function (models) {
		// un género TIENE MUCHOS juegos
		Genre.hasMany(models.Games, {
			as: 'games',
			foreignKey: 'genre_id',
		});
	}

	return Genre;
};
