
//Eq 1: Funcion que recibe en numero y la suma uno.

function sumarUno(numero, resultadoCallBack){
    setTimeout(function(){
    //return numero +1;
    resultadoCallBack(numero +1);
    },800);
}
//Eq 1 Llamar la funcion
sumarUno(8,function(nuevoValor1){
    //Eq 1: Desplegar el resultado en consola 
    //console.log("Resultado", nuevoValor1);
    sumarUno(nuevoValor1,function(nuevoValor2){
        sumarUno(nuevoValor2,function(nuevoValor3){
            console.log("Resultado:" ,nuevoValor3);
        });
    });

});
























