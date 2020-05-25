import React from 'react';
// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import LastProduct from './components/LastProduct';
import Categories from './components/Categories';
import UsersQty from './components/UsersQty';
import ProductsAmount from './components/ProductsAmount';
import ProductsQty from './components/ProductsQty';

// Data
/*import data from './data/data';*/


function App () {
	return (
		<div id="wrapper">
			{/* Componente Sidebar */}
			<Sidebar/>			
			
			<div id="content-wrapper" className="d-flex flex-column">

				<div id="content">
					{/* Componente Navbar */}
					<Navbar/>
					
					<div className="container-fluid">

						<div className="d-sm-flex align-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">Apocalypse Gaming Dashboard</h1>
						</div>
						
						<div className="row">
							<UsersQty/>
							<ProductsAmount/>
							<ProductsQty/>
						</div>
						
						<div className="row">
							{/* Último Producto */}
							<LastProduct/>


							{/* Categorías */}
							<Categories/>
						</div>
					</div>
				</div>
				
				<footer className="sticky-footer bg-white">
					<div className="container my-auto">
						<div className="copyright text-center my-auto">
							<span>Copyright &copy; Dashboard 2020</span>
						</div>
					</div>
				</footer>
				
			</div>
		</div>
	);
}

export default App;
