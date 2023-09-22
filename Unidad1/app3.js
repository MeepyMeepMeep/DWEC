//TIPOS

//typeOf

const num=20;
console.log("El tipo de dato es: "+ typeof num);

//NaN
const variable= 4*"hola";
console.log("El fipo de variable 'variable' es: "+ variable);

//Infinite

const division= 4/0;
console.log("El tipo de dato es: "+typeof division);

//isNaN -> pregunta si el argumento que le pasas es NaN o no
//En otras palabras, que si JS puede interpretar el contenido como un número
const numberstring="30";
const string="20 años";

console.log(isNaN(variable)); //true -> el valor del argumento es un número
console.log(isNaN(division)); //false -> el valor no es un número
console.log(isNaN("12")); //false -> es un número porque tiene valores numéricos aunque esté en un string
console.log(isNaN(12)); //false -> es un número
console.log(isNaN(numberstring)); //false -> es un número porque tiene valores numéricos aunque esté en un string
console.log(isNaN(string)); //true -> al juntar números con caracteres alfanuméricos ya no se interpreta como un número

//toString
//Pasa valores numéricos a string

const number=200;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());

//toFixed
//Formatea el número para que tenga decimales

console.log(number.toFixed(2));

//Ejercicio 01
//Script que calcule cuanto toca pagar a cada persona de una cena que cuesta 102e y asistieron 6 personas

const totalcena=102;
const asistentes=6;

console.log("El precio por persona es de "+(totalcena/asistentes).toFixed(2) +" euros.");

//Boolean

//Casos verdaderos---

//Devuelve verdadero con 1 o números mayores
console.log(Boolean(1));
//Devuelve verdadero si le pasas un string
console.log(Boolean("cosa"));
//Verdadero con numeros de coma flotante
console.log(Boolean(3.14));
//Verdadero en casos de verdad
console.log(Boolean(100>5));
console.log('1'==1);

//Casos falsos---
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('1'===1));
console.log(Boolean(undefined));


