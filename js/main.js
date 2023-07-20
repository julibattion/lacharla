const nav = document.querySelector("#nav");
const abrir = document.querySelector("#boton-abrir");
const cerrar = document.querySelector("#boton-cerrar");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
    document.getElementById("boton-abrir").style.visibility = 'hidden';
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
    document.getElementById("boton-abrir").style.visibility = 'visible';
})