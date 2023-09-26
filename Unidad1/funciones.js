//FUNCIONES ANONIMAS

let function1=function(parametro){
    return parametro+" :)";

}

console.log(function1("Holii")); // DEVUELVE     Holiii :)


//CALLBACK

function getIdentificacion(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

let formatoNIF=function(numero,letra){
    return numero + "-" + letra;
}

let fotmatoNIE=function(numero,letra){
    return letra + "-" + numero;
}

console.log(getIdentificacion(3434343,"S",formatoNIF));


//FORMA MAS UTILIZADA DE CALLBACKS

function getIdentificacion2(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

getIdentificacion2(343434,"E",function(numero,letra){
    console.log(numero + "-" + letra);
    return numero+"-"+letra;
});


//FUNCIONES AUTOINVOCADAS (se puede preceder de ! para saber que es autoidentificada)

(function(numero,letra){
    console.log(numero + "-" + letra);
})(565656,"J");



