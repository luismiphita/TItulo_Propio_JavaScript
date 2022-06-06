/* console.log('Archivo de variables cargado'); */
// let --> ambito global y de clase
// var --> ambito global --> NO SE UTILIZA
// cons --> constantes

const DNI = '123456789D';
let nombre = "Luismi";
let apellido = undefined;
let edad = 20;
let carnet = true;
let fecha = new Date();

apellido = "Perez";
/* DNI = 12345678; */
console.log(typeof nombre);
console.log(typeof apellido);
console.log(typeof edad);
console.log(typeof carnet);
console.log(typeof edad);
console.log(typeof fecha);

console.log(isNaN(nombre)); 
/* para negar algo con la ! delante */
console.log(!isNaN(edad)); 

/* salida por consola */
console.log('Mi nombre es ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años');

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);