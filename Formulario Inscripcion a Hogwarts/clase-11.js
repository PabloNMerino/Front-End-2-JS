/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario(){ 
    // armamos nuestro objeto modelo👇
    const objeto = {
        nombre: "",
        password: "",
        telefono: "",
        hobbies: [],
        nacionalidad: ""
    }

    // capturamos los nodos
    const nombre = document.querySelector('#nom');
    const password = document.querySelector('#pass');
    const telefono = document.querySelector('#tel');
    const checkbox = document.querySelectorAll('[name=hobbies]');
    const radios = document.querySelectorAll('[name=nacionalidad]');

    // rellenamos los valores del objeto👇
    objeto.nombre = nombre.value;
    objeto.password = password.value;
    objeto.telefono = telefono.value;
    checkbox.forEach( hobbie => {
        // si está en true lo sumamos al listado
        if(hobbie.checked){
            // lo sumamos al listado
            objeto.hobbies.push(hobbie.id)
        }
    });
    radios.forEach( radio => {
        if(radio.checked){
            objeto.nacionalidad = radio.id
        }
    })


    // devolvemos la informacion
    return objeto;
};


/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento){
    // frenamos el evento por defecto
    evento.preventDefault();

    // objeto con los datos👇
    const datos = capturarDatosFormulario();
    
    console.log("Submitttttt");
    console.log(datos);


    const errores = validarInformacion(datos);
    console.log(errores);

    renderizarErrores(errores);
    mostrarMensajeExito(errores);

    // formulario.reset();
})




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */

function validarInformacion(usuario) {
    let errores = [];
    // 👇 desarrollar aqui la funcion
    
    // validando el nombre
    if (usuario.nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.")
    }
    // validando la contraseña
    if (usuario.password.trim().length < 3) {
    errores.push("La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.")
    }
    // validando la contraseña
    if (usuario.telefono.length < 10) {
    errores.push("No es un teléfono válido.")
    }
    // validando la contraseña
    if (usuario.hobbies.length > 4) {
    errores.push("Sólo es posible seleccionar 4 hobbies.")
    }
    // validando la contraseña
    if (usuario.nacionalidad == "") {
    errores.push("Debe seleccionar una nacionalidad.")
    }
    
    return errores;
}

