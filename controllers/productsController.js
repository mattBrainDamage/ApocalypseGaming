const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
	return htmlFile;
}

const productsController = {
	index: (req, res) => {
        let html = readHTML('productos');
		res.send(html);
	}
};


module.exports = productsController