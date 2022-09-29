//Eq 1: Funcion que recibe en numero y la suma uno.
function sumarUno(numero){
    var promesa1=new Promise(function(resolve,reject){
        if(numero>=7){
            reject("El numero ya es muy alto");
        }
        setTimeout(function(){
            //return numero +1;
            resolve(numero +1);
            },800);
    });
    return promesa1;
}
/*
sumarUno(8).then(nuevoNumero=>{
    console.log('Resulatado',nuevoNumero);
    return sumarUno(nuevoNumero);
}).then(nuevoNumero=>{
    console.log('Resulatado',nuevoNumero);
    return sumarUno(nuevoNumero);
}).then(nuevoNumero=>{
    console.log('Resulatado',nuevoNumero);
    return sumarUno(nuevoNumero);
});
*/
sumarUno(8)
.then(sumarUno)
.then(sumarUno)
.then(nuevoNumero=>{
    console.log('Resultado: ', nuevoNumero);
})
.catch(error=>{
    console.log("Error en la promesa",error);
});




