
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
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Error en la promesa de la funcion Sumar Rapido');
        }, 1000);
    });
}

Promise.race([sumarLento(5),sumarRapido(10)])
.then(respuesta=>{
    console.log('Respuesta: ', respuesta);
})
.catch(error=>{
    console.log("Error en la respuesta de la promesa: ", error);
});















