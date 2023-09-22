//ESTRUCTURAS DE CONTORL

//CONDICIONAL

const flightprice=100;
const hotelprice=50;
const tourprice=30;
const totalcost= flightprice+hotelprice+tourprice;
const budget="300";

if(budget>totalcost){
    console.log('Si me voy de viaje.')
}else if(budget===totalcost){
    console.log('Justito, pero si puedo ir.')
}else{
    console.log('No me voy.');
}


//OPERADORES TERNARIOS

//  ?  -> entonces  -----------------------------------------------------------------

//Si el presupuesto es mayor o igual, primer console, si no, segundo console
//O tambien dicho como si true -> primer resultado, else-> segundo resultado
const result=budget > totalcost ? console.log('Si me voy'):console.log('No me voy');

const newresult= budget > totalcost ?100:200;
console.log(newresult);


//Hacer todas las comprobaciones pertinentes para saber si es numero par o impar
const num="30" + 3;
let resultado;

if(!isNaN(num)){
    resultado= num/2==0 ? console.log("Es Par."):console.log("Es impar.")
}else{
    console.log("No se puede proceder, no es un numero.")
}

//Dada una cadena de texto, si la cadena es más larga de 27 caracteres cortarla para que tenga 27
//si es menor de 27, añade caracteres

const cadena="En un lugar de la Mancha, de cuyo nombre";
