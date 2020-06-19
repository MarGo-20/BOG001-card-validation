import validator from './validator.js';

console.log(validator);

//Variables para traer valores del html y los eventos a ejecutar al hacer click en botones.
let botonIngresar = document.getElementById('botonIngresar');
botonIngresar.addEventListener("click",inicioCompra);

let botonInicioCompra = document.getElementById('botonInicioCompra');
botonInicioCompra.addEventListener("click",continuarCompra);

let botonInicioCompra1 = document.getElementById('botonInicioCompra1');
botonInicioCompra1.addEventListener("click",continuarCompra);

let botonInicioCompra2 = document.getElementById('botonInicioCompra2');
botonInicioCompra2.addEventListener("click",continuarCompra);

let botonEjecutarCompra = document.getElementById('botonEjecutarCompra');
botonEjecutarCompra.addEventListener("click",realizarCompra);


//Funciones para prender y apagar las ventanas.
function inicioCompra() {
    document.getElementById('ventana1').style.display = 'none';
    document.getElementById('ventana2').style.display = 'block';
}
  
function continuarCompra() {
    document.getElementById('ventana2').style.display = 'none';
    document.getElementById('ventana3').style.display = 'block';
}

//Función para capturar isvalid y maskify.
function realizarCompra() {
    let tarjeta = document.getElementById('tarjeta');

    //Se condiciona para obtener un alert como respuesta según true o false.
    /*DEBO COLOCAR DOBLE O TRIPLE IGUAL*/
    if (tarjeta.value == "") {
        alert("Debes completar el campo con un valor valido") }
    else if (validator.isValid(tarjeta.value) === true){
        alert("Tarjeta valida, tu compra ha sido exitosa");
    } 
    else  {
        alert("Tarjeta invalida, verifique la información e intentelo nuevamente o pruebe con otra tarjeta.");
    }

    let numeroEnmascarado = validator.maskify(tarjeta.value);
    tarjeta.value = numeroEnmascarado;
} 
