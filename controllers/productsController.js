


const productsController = 

{
	index: (req, res) => {

		let celulares = [
			{
				nombre: 'Motorola Moto E6 Plus',
				precio: 14999
			},
			{
				nombre: 'Motorola Moto G7',
				precio: 19999
			},
			{
				nombre: 'Alcatel 5033A',
				precio: 6999
			},
			{
				nombre: 'Samsung Galaxy A50',
				precio: 33499
			}
		];

		res.render('products', {'celulares': celulares});
	},
	results : (req, res) => {
		let celulares = [
			{
				nombre: 'Motorola Moto E6 Plus',
				precio: 14999
			},
			{
				nombre: 'Motorola Moto G7',
				precio: 19999
			},
			{
				nombre: 'Alcatel 5033A',
				precio: 6999
			},
			{
				nombre: 'Samsung Galaxy A50',
				precio: 33499
			}
		];


		const result = celulares.filter(product => product.precio < req.query.max);
		res.render('results',{'result': result})
	}

}
;

module.exports = productsController ;

