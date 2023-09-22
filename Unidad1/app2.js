//Alcance de las variables (scope)

//var es accesible desde cualquier scope
//let y const sólo son visibles en el scope donde están definidos
//const no puede modificar su valor

let adios="Adiosito";
const algo="Algo";

if(true){
    var hola="Hiiii"
}

console.log("var: "+hola);
console.log("let: "+adios);
console.log("const: "+algo);

adios="Cusbai";
console.log("let modificado despues: "+adios);

