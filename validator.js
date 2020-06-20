const validator = {
  //Función para validar el número de la tarjeta.
  isValid: (numeroTarjeta) => {
    //Utilizamos el método split para dividir el objeto numeroTarjeta de tipo String en un array, separando la cadena en subcadenas.
    numeroTarjeta.split("");
    let arr = numeroTarjeta.split("");
    //Implementamos el método reverse para invertir el orden de los elementos del array obtenido anteriormente.
    let numero_invertido = arr.reverse();
    let suma = 0;
    //Ubicamos las posiciones según el número de caracteres del string. Convertimos el valor del string en un entero.
    for (let i = 0; i<numero_invertido.length; i++) {
      numero_invertido[i] = parseInt(numero_invertido[i]);
      //Se condiciona para identificar los indices impares. Se multiplica cada dígito de posición par por dos
      //Se suman los digitos de ese número, si el doble de ese digito es mayor o igual a 10.
      if(i %  2 == 1) { 
        numero_invertido[i] = (parseInt((numero_invertido[i]* 2) / 10)) + ((numero_invertido[i] * 2) % 10);
      }
      //Se obtiene el resultado final del número y se iguala a la variable suma.
      suma += numero_invertido[i];
    }
    //Se verifica que se cumpla la condicion del algoritmo = 0.
    return ((suma % 10) == 0)
  },

  //Función para enmascarar el número de la tarjeta.
  maskify: (numeroTarjeta) => {
    //Se condiciona para realizar la función a mas de 4 digitos.
    if(numeroTarjeta.length > 4) {
      return "#".repeat(numeroTarjeta.length -4) + numeroTarjeta.slice(-4);
    }
    //Para lo demas no aplica la función.
    else {
      return numeroTarjeta}
  },
};

export default validator;
