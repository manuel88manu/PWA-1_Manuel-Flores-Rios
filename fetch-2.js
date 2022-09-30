console.log("¡Hola Mundo!");
var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);
request.onreadystatechange = function( state ){
    if (request.readyState === 4) {
        //FIC: la respuesta obtiene un string.
        var resp = request.response;
        //FIC: ahora transformamos la cadena en formato
        var respObj = JSON.parse(resp);
        //FIC: enviamos el resultado a la consola.
        console.log( respObj );
        //FIC: obtenemos solo la pagina actual.
        console.log( respObj.page);
        //FIC: obtenemos solo la data de los usuarios.
        console.log( respObj.data);
    }   
}
//configuracion de nuestro servicio
//creamos la funcion fetch

fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(respObj => {
        console.log(respObj);
        console.log(respObj.page);
        console.log(respObj.per_page);
        console.log(respObj.data);
});
