const hamburger1 = document.querySelector('.hamburger');
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle("showImage")
    hamburger1.computedStyleMap.opacity = '0'
}
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
       aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight) {
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage");
        hamburger1.computedStyleMap.opacity = '1'
    } 
})

/*  =================================================== */




















