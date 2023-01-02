/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
    // caputarmos si existe una caja de errores y la eliminamos
    const caja = document.querySelector('#cajaErrores');
    if(caja){
        caja.remove()
    }


    if (listado.length > 0) {
        const cajaErrores = document.createElement('div');
        cajaErrores.setAttribute('id', 'cajaErrores');

        cajaErrores.style = "background-color: #ff000026;color: red; padding: 15px;margin-top: 15px;";

        // por cada error sumamos el texto en un parrafo a la caja
        listado.forEach(error => {
            cajaErrores.innerHTML += `<p>${error}</p>`
        });

        formulario.appendChild(cajaErrores);

    }



}



// probamos escuchar los cambios del input constantemente
const nombre =  document.querySelector('#nom');

nombre.addEventListener('input', ()=>{
    console.log("hubo un cambio");

    // mostramos un borde verde cuando cumple la validacion
    if(nombre.value.trim().length > 3){
        nombre.style = "color:  green;font-weight: bold;"
    }else{
        nombre.style = "color:  black;font-weight: regular;"
    }

})










/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

//   desarrollar la funcion aqui
function mostrarMensajeExito(listado) {
    

    const caja2 = document.querySelector('#exito');

    if(caja2){
        caja2.remove()
    }

    if(listado.length === 0){
        const cajaVerde = document.createElement('div');
        cajaVerde.setAttribute("id", "exito")

        cajaVerde.style = "background-color: #74E183;color: green; padding: 15px;margin-top: 15px;"
        cajaVerde.innerHTML = `<p> ¡Formulario completado con éxito! </p>`

        formulario.appendChild(cajaVerde)

        const boton = document.querySelector('button');

        boton.setAttribute("disabled", "true")

        setTimeout(() => {
            cajaVerde.remove();
            boton.removeAttribute("disabled")
            formulario.reset();
        }, 4000);
        
    }
    
}