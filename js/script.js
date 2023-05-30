
const mensaje=document.querySelector("#texto");
const mensaje_en=document.querySelector("#des-texto");
const encriptar=document.querySelector("#button-en");
const desencriptar=document.querySelector("#button-des")
const copiar=document.querySelector("#copiar")
const imagen=document.querySelector("#pre-mens")
var mensaje_desencriptado;
encriptar.addEventListener("click",function(){
    if (mensaje.value !=''){
        mensaje_desencriptado=mensaje.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
        mensaje_en.textContent=mensaje_desencriptado
        imagen.classList.add("accion");
        mensaje_en.classList.remove("accion");
        copiar.classList.remove("accion");
    } else {
        mensaje_en.classList.add("accion");
        copiar.classList.add("accion");
        imagen.classList.remove("accion");
    }
    
    
})

desencriptar.addEventListener("click",function(){
    if (mensaje.value !=''){
        mensaje_desencriptado=mensaje.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u")
        mensaje_en.textContent=mensaje_desencriptado;
        imagen.classList.add("accion");
        mensaje_en.classList.remove("accion");
        copiar.classList.remove("accion");
    } else {
        mensaje_en.classList.add("accion");
        copiar.classList.add("accion");
        imagen.classList.remove("accion");
    }
    
})

copiar.addEventListener("click",function(){
    navigator.clipboard.writeText(mensaje_desencriptado)
})