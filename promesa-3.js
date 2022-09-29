
let arregloVarios=[sumarLento(5),sumarRapido(10),true,'Hola Mundo'];
//Funcion normal que regresa una promesa 
//pero el resultado se obtiene mas lento 
function sumarLento(numero){
    // var promesa = new Promise(function (resolve,reject){});
    //return promesa;
    return new Promise(function(resolve,reject){
       /*
        if(numero>=5){
            reject('Sumar Lento Fallo');
        }
        */
        setTimeout(function(){
            resolve(numero+1);
        },800);

    });

}

function sumarRapido(numero){
    // var promesa = new Promise(function (resolve,reject){});
    //return promesa;
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(numero+1);
        },300);

    });

}
//Eq 1: Llamado normal de la funcion sumar lento y su promesa 
/*
sumarLento(5)
.then(respuesta=>{
    console.log('Respuesta Lenta: ',respuesta);
});
//Eq 1: Llamado normal de la funcion sumar lento y su promesa 
sumarRapido(10)
.then(respuesta=>{
    console.log('Respuesta Rapida:', respuesta);
});
*/
//Eq 1: Llamado de las 2 funciones y sus respectivas promesas al mismo tiempo 
Promise.all(arregloVarios)
.then(respuestas=>{
    console.log('Respuestas:',respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas",error);
});




