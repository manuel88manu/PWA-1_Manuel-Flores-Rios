//Eq 1: Instanciamos los dos componentes de imagen 
//que estan en la pagina index.html
let img1=document.getElementById("idImg1");
let img2=document.getElementById("idImg2");

// Eq 1: Fetch con codigo de promesa simplificada 
fetch('Imagenes/imagen_1.jpg')
.then(resp=>resp.blob())
.then(image=>{
    console.log(image);
    //Eq 1: Instancia para imagen 1
    var imgPath1=URL.createObjectURL(image);
    img1.src=imgPath1;
});
// Eq 1: Fetch con codigo de promesa normal
fetch('Imagenes/imagen_2.jpg')
.then(resp=>{
    return resp.blob();
})
.then(image=>{
    console.log(image);
    //Eq 1:Instancia para imagen 2
    var imgPath2=URL.createObjectURL(image);
    img2.src=imgPath2;
});







