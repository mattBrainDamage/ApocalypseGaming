window.addEventListener('load',()=>{

    const formToValidate = document.querySelector('form.userEdit');


    formToValidate.addEventListener('submit',(e)=>{
        let errores= [];
        let campoNombre = formToValidate.querySelector('input[name="firstName"]');

 

        if(campoNombre.value == ''){
            errores.push('Debe completar el campo Nombre');
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