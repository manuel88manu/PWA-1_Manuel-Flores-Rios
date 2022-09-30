//declaracion de un objeto 
let usuario={
    nombre:'Alberto',
    edad:22
}

//api fetch post de usuario 
fetch('https://reqres.in/',{
    method:'POST',
    body:JSON.stringify(usuario), //Data por enviar 
    headers:{
        'Conent-Type':'application/json'
    }

})
.then(resp=>resp.json())
.then(console.log)
.catch(error=>{
    console.log('Error en la peticion API POST');
    console.log('Error');
});
