//Operaciones con cadenas de texto

//Concatenar texto

let nombre="Pepe";
let apellido="Mosca";
let nombreCompleto= nombre + ' ' +apellido;
console.log(nombreCompleto);

//Template literals

let curso='VS2DAW';
var saludoNombreCompleto=`Hola ${nombre} ${apellido}`;
console.log(saludoNombreCompleto);

let saludo=`Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}.` 
console.log(saludo);

//Length
console.log(nombre.length); //metodo y no funcion       nombre es un objeto 

//.includes(subcadena) DEVUELVE BOOLEAN t/f
console.log(saludo.includes('Bienvenido'));

//.sclice(start,end)
console.log(saludo.slice(3,7));

//.replace("this text replaces", "this one")
console.log(saludo.replace("Pepe", "Jose"));

//.trim   elimina espacios en blanco del principio al final
let texto='     marico      nes     ';
console.log(texto.trim());
