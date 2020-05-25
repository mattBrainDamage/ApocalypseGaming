import React, { Component } from 'react';

class LastItem extends Component{

    /* Estado */
    constructor(props){
        super(props);
        this.state= {
            name:"",
            price: "",
            description:"",
            image:""
        }
    }


    apiCall(url, result){
        fetch(url)
            .then( response => response.json() )
            .then( data => result(data) )
            .catch( error => console.log(error))
    }

    showLastProduct = (data)=>{
        console.log(data);
        
       this.setState(
           {
            id: data.data[0].id,
            name: data.data[0].game_name,
            price: data.data[0].price,
            description: data.data[0].description,
            image: data.data[0].image
           }
        )  
    }


    componentDidMount(){
        console.log("Montado ok");
        this.getLastProduct() 
    }

    getLastProduct(){
        this.apiCall("http://localhost:3001/api/products", this.showLastProduct)
    }


    render(){
        return(
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo producto ingresado</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                       
                         <img 
                         className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                         style={{width:"25rem"}} 
                         src={`assets/images/${this.state.image}`}
                         
                         alt={this.state.name}/>                                                                      
                    </div>
                    <h3>Nombre: {this.state.name}</h3>
                    <p>Precio: ${this.state.price}</p>
                    <p>{this.state.description}</p>

                </div>
            </div>
        </div>
        )
    }
}

export default LastItem;



/*import React from 'react';

const LastProduct = () => {
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src="assets/images/product_dummy.svg" alt="lorem ipsum dolet sie amet" />
					</div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
					<a target="_blank" rel="nofollow" href="/">View product detail</a>
				</div>
			</div>
		</div>
	)
}

export default LastProduct;*/


