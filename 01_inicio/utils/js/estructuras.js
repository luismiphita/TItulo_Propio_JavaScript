// if if else switch while do while for foreach (especial) for or for on break goto

//if if else

let acierto = true;
if(acierto)
console.log("La respuesta es true");
else{
    console.log("La respuesta es false");
}

/* let nota = 4;
if (nota >= 5) {
    console.log("El examen esta aprobado");
} else{
    console.log("El examen esta suspenso");
} */

//if ternario
//condicion ? true : false
acierto ? console.log("Examen aprobado") : console.log("Examen suspenso");
//if else
//if else if else

// con & solo hace lo que le pides, si estas aprobado bien, si no, no hace nada por el suspenso
acierto & console.log("Examen aprobado")

//switch

/* let nota = 6;
switch (nota) {
    case 1:
        console.log("dato introducido 1");
        break;
    case 2:
        console.log("dato introducido 2");
        break;
    case 3:
        console.log("dato introducido 3");
        break;

    default:
        console.log("Dato incorrecto");
        break;
} */


/* let n1 = prompt('Dime un numero', 'X');
let n2 = prompt('Dime otro numero', 'Y');
let operacion = prompt('Dime una operacion', 'operacion');

let suma;
let resta;
let multiplicacion;
let division;

if (operacion == 'suma') {
    alert('El resultado de la suma es: ' + (Number(n1) + Number(n2)));
} else if(operacion == 'resta'){
    alert('El resultado de la resta es: ' + (n1 - n2));
}else if(operacion == 'multiplicacion'){
    alert('El resultado de la multiplicacion es: ' + (n1 * n2));
}else{
    alert('El resultado de la division es: ' + (n1 / n2));
} */

/* let numero1 = prompt("Introduce operador uno");
let numero2 = prompt("Introduce operador dos");

if (
  !isNaN(Number(numero1)) &&
  !isNaN(Number(numero2)) &&
  numero1 > 0 &&
  numero2 > 0
) {
  let operacion = prompt("Introduce la operacion a realizar");
  let resultado;
  switch (operacion) {
    case "suma":
      resultado = numero1 + numero2;
      break;
    case "resta":
      resultado = numero1 - numero2;

      break;
    case "multiplicacion":
      resultado = numero1 * numero2;

      break;
    case "division":
      resultado = numero1 / numero2;

      break;

    default:
      console.log("operacion desconocida");
      break;
  }
  resultado > 0
    ? alert(`La ${operacion} entre ${numero1} y ${numero2} es ${resultado}`)
    : alert("resultado negativo");
} else {
  console.log("Alguno de los datos son incorrectos");
}

//let numeroTraducido = (Number)numero
isNaN(Number(numero1)) ? console.log("es un NAN") : console.log("es un numero"); */S