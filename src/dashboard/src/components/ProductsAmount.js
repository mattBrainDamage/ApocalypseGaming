import React, { Component } from 'react';
class ProductsAmount extends Component{


    constructor(props){
        super(props);
        this.state= {
            amount:"",
            title: "Total de $$"
        }
    }


    apiCall(url, result){
        fetch(url)
            .then( response => response.json() )
            .then( data => result(data) )
            .catch( error => console.log(error))
    }


    showProducts = (data)=>{
        console.log(data);
        
       this.setState(
           {
            amount: data.metadata.amount,
            title: "Dinero en productos"
           }
        ) 
        
        
        
    }


    componentDidMount(){
        console.log("Montado ok");
        this.getProducts() 
    }


    getProducts(){
        this.apiCall("http://localhost:3001/api/products", this.showProducts)
    }

    render(){
        return(
            <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">    
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">{this.state.title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">${this.state.amount}</div>
                    </div>
                <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }
}

export default ProductsAmount;