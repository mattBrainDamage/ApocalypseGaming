window.addEventListener('load',()=>{

    const formToValidate = document.querySelector('form.register');


    formToValidate.addEventListener('submit',(e)=>{
        let errores= [];
        let campoNombre = formToValidate.querySelector('input[name="firstName"]');
        let campoEmail = formToValidate.querySelector('input[name="email"]');
        let campoPassword = formToValidate.querySelector('input[name="password"]');
 

        if(campoNombre.value == ''){
            errores.push('Debe completar el campo Nombre')
        }

        if(campoEmail.value == ''){
            errores.push('Debe completar el campo Correo electrónico')
        }  

        if(campoPassword.value == ''){
            errores.push('Debe completar el campo Password')
        }  

        
        if(errores.length > 0){
            e.preventDefault();
        }

        let ulErrors = document.querySelector('div.errors ul')
        ulErrors.innerHTML = '';
        errores.forEach(msgError => {

            ulErrors.innerHTML += '<li>'+msgError+'</li>';
        });


    })

})