//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

//Validar si es número
var _NotNum = Number.isNaN

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

do {
//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")

//Validar que se ingresen solamente numeros
var edad 
do{
  edad = prompt("¿Cuantos años tiene?")
  edad = parseInt(edad)
  if(_NotNum(edad)){
    alert("Ingrese solamente números")
  }
} while (_NotNum(edad))

var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
if("SI" == casado.toUpperCase()){
  var edad_conyuge
  do{
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
    edad_conyuge = parseInt(edad_conyuge)
    if (_NotNum(edad_conyuge)) {
      alert("Ingrese solamente números")
    }
  } while (_NotNum(edad_conyuge))
} 
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
/**
 * 1. convierta la cantidad de hijos a numero
 */
if("SI" == hijos.toUpperCase()){
  do{
    cantidad_hijos = prompt("¿Cuantos hijos tiene?")
    cantidad_hijos = parseInt(cantidad_hijos)
    if (_NotNum(cantidad_hijos)){
      alert("Ingrese solamente números")
    }
  } while (_NotNum(cantidad_hijos))
}
var hijos_numero = parseInt(hijos)
var cantidad_hijos_numero = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero >= 18 && edad_numero < 25) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total += recargo
//aqui puede colocar un else if() con el siguiente rango
} else 
    if (edad_numero >= 25 && edad_numero < 50) {
      recargo = precio_base * edad_25
      recargo_total += recargo
    } else 
      if (edad_numero >= 50) {
        recargo = precio_base * edad_50
        recargo_total += recargo
    }

/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
  recargo = precio_base * casado_18
  recargo_total += recargo
//aqui puede colocar un else if() con el siguiente rango
  } else 
      if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      recargo = precio_base * casado_25
      recargo_total += recargo
      } else 
        if (edad_conyuge_numero >= 50) {
          recargo = precio_base * casado_50
          recargo_total += recargo
      }

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
 recargo = precio_base * hijos_recargo * cantidad_hijos_numero
 recargo_total += recargo


precio_final = precio_base + recargo_total

//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)


var repetir = prompt("¿Desea realizar otra operación?", "si/no")

  if("NO" == repetir.toUpperCase()) {    
    window.close()
  } else ("SI" == repetir.toUpperCase())

} while ("SI" == repetir.toUpperCase())

 

