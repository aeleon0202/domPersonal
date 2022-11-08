//controlando etiquetas con el DOM 
// 1 er paso, almacenar en memoria(crear una variable) la etiqueta que quiero controlar
let etiquetaImagen=document.getElementById("fotografia")

//2 controlando nuestras etiquetas
//2.1 controlar es cambiar la fuente (src) de una etiqueta 

etiquetaImagen.src="./img/pecados.png"

//2.2 controlar es cambiar el contenido de texto de una etiqueta

let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//2.3 controlar es agregar estilos 
etiquetaTitulo.classList.add("fuente","alineado")

//2.4 controlar es remover estilos 
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove("text-danger")

//2.5 controlar es detectar eventos 
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})