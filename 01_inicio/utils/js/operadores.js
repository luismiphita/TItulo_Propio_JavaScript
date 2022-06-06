// aritmeticos

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