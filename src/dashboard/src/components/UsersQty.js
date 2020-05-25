import React, { Component } from 'react';
class UsersQty extends Component{

    /* Estado */
    constructor(props){
        super(props);
        this.state= {
            quantity:"",
            title: "Total de usuarios del sitio"
        }
    }

    /* Funcion apiCall */

    apiCall(url, result){
        fetch(url)
            .then( response => response.json() )
            .then( data => result(data) )
            .catch( error => console.log(error))
    }

    /* Resultado de apiCall() */

    showUsers = (data)=>{
        console.log(data);
        
       this.setState(
           {
            quantity: data.metadata.quantity,
            title: "Total de Usuarios"
           }
        )  
    }

    /* Carga de componente */
    componentDidMount(){
        console.log("Componente ok");
        this.getProducts() 
    }

    /* función para componentDidMount */
    getProducts(){
        this.apiCall(
            "http://localhost:3001/api/users", 
            
            this.showUsers)
    }

    render(){
        return(
            <div className="col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">    
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">{this.state.title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.quantity}</div>
                    </div>
                <div className="col-auto">
                            <i className="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        )
    }
}

export default UsersQty;