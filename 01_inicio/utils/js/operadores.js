// operadores aritmeticos

/* let numero1 = 6;
let numero2 = 10;

console.log(suma);



console.log(resta);
console.log(multiplicacion);
console.log(division);

console.log('la suma de los numeros es ' + (numero1 + numero2));
console.log(`la suma de los numeros es ${numero1 + numero2}`);
console.log(`la resta de los numeros es ${numero1 - numero2}`);
console.log(`la multiplicacion de los numeros es ${numero1 * numero2}`);
console.log(`la division de los numeros es ${numero1 / numero2}`);
console.log(`la modulo de los numeros es ${numero1 % numero2}`);

console.log(`EL tipo del resto es ${typeof (numero1 % numero2)}`); */


// operadores de comparacion

/* numero1 = 11;
numero2 = 10;

let mayorQue = numero1 > numero2;
console.log(mayorQue);

let mayorIgual = numero1 >= numero2;
console.log(mayorIgual);

let menorQue = numero1 < numero2;
console.log(menorQue);

let menorIgual = numero1 <= numero2;
console.log(menorIgual);

let diferente = numero1 != numero2;
console.log(diferente);

numero1 = 4;
numero2 = '4';
let igual = numero1 == numero2;
console.log(igual); */

/* alert(`Bienvenido ${nombre}`); */

/* let confirmacion = confirm('¿Seguro que quieres continuar?');
console.log('Respuesta al confirm ' + confirmacion); */



let nomb = prompt('Dime tu nombre', 'nombre');
let ape = prompt('Dime tu apellido' , 'apellido');
let n1 = prompt(`Por favor ${nomb} ${ape} introduce un numero`, 'X');
let n2 = prompt(`Por favor ${nomb} ${ape} introduce otro numero`, 'Y');
confirm('¿Seguro que quieres continuar?');
let suma = n1 + n2;

let resta = n1 - n2;

let multiplicacion = n1 * n2;

let division = n1 / n2;

alert(`Las operaciones entre X y Y son:
Multiplicacion: ${multiplicacion}
Division: ${division}
Suma: ${suma}
resta: ${resta}`);

