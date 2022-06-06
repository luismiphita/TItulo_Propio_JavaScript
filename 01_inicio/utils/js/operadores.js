// operadores aritmeticos

let numero1 = 6;
let numero2 = 10;
let suma = numero1 + numero2;
console.log(suma);

suma += 10;
let resta = numero1 - numero2;
resta -= 10;
let multiplicacion = numero1 * numero2;
multiplicacion *= 2;
let division = numero1 / numero2;
division /= 2;

console.log(resta);
console.log(multiplicacion);
console.log(division);

console.log('la suma de los numeros es ' + (numero1 + numero2));
console.log(`la suma de los numeros es ${numero1 + numero2}`);
console.log(`la resta de los numeros es ${numero1 - numero2}`);
console.log(`la multiplicacion de los numeros es ${numero1 * numero2}`);
console.log(`la division de los numeros es ${numero1 / numero2}`);
console.log(`la modulo de los numeros es ${numero1 % numero2}`);

console.log(`EL tipo del resto es ${typeof (numero1 % numero2)}`);


// operadores de comparacion

numero1 = 11;
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
console.log(igual);