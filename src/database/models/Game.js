module.exports = (sequelize, dataTypes) => {
	const Game = sequelize.define('Games', {
		id: {
			primaryKey: true,
			autoIncrement: true,
			type: dataTypes.INTEGER
		},
		game_name: {
			type: dataTypes.STRING
		},
		image: {
			type: dataTypes.STRING
		},	
		description: {
			type: dataTypes.STRING
		},
		genre_id: {
			type: dataTypes.INTEGER
        },
        price: {
			type: dataTypes.INTEGER
		},
	}, {
		// tableName: 'Games'
		timestamps: false
	});

	// Relaciones
	Game.associate = function (models) {
		// Un Juego  PERTENECE a un género
		Game.belongsTo(models.Genres, {
			as: 'genre',
			foreignKey: 'genre_id',
		});
	}

	return Game;
};
