import validator from './validator.js';

console.log(validator);

//Variables para traer valores del html y los eventos a ejecutar al hacer click en botones.
let botonIngresar = document.querySelector('#botonIngresar');
botonIngresar.addEventListener("click",inicioCompra);

let botonInicioCompra = document.querySelector('#botonInicioCompra');
botonInicioCompra.addEventListener("click",continuarCompra);

let botonInicioCompra1 = document.querySelector('#botonInicioCompra1');
botonInicioCompra1.addEventListener("click",continuarCompra);

let botonInicioCompra2 = document.querySelector('#botonInicioCompra2');
botonInicioCompra2.addEventListener("click",continuarCompra);

let botonEjecutarCompra = document.querySelector('#botonEjecutarCompra');
botonEjecutarCompra.addEventListener("click",realizarCompra);


//Funciones para prender y apagar las ventanas.
function inicioCompra() {
    document.querySelector('#ventana1').style.display = 'none';
    document.querySelector('#ventana2').style.display = 'block';
}
  
function continuarCompra() {
    document.querySelector('#ventana2').style.display = 'none';
    document.querySelector('#ventana3').style.display = 'block';
}

//Funciones para capturar isvalid y maskify.
function realizarCompra() {
    //Declaramos la variable tarjeta para tomar su valor.
    let tarjeta = document.querySelector('#tarjeta');

    //Se condiciona a no dejar el campo vacio, se obtiene un alert de advertencia.
    if (tarjeta.value == "") {
        alert("Debe completar el campo con un valor númerico" );
    }
    //Se condiciona según la validación obtener un alert como respuesta  true o false.
    else if (validator.isValid(tarjeta.value) === true){
        alert("Tarjeta valida, su compra ha sido exitosa");
    } 
    else {
        alert("Tarjeta invalida, verifique la información e intentelo nuevamente o pruebe con otra tarjeta.");
    }
    //Declaramos la variable que nos permita enmascarar el numero luego de validar.
    let numeroEnmascarado = validator.maskify(tarjeta.value);
    tarjeta.value = numeroEnmascarado;
} 
