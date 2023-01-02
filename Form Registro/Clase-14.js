// Vamos a trabajar pasando información al Storage.
// De esta manera vamos a poder consumir en un html algo que haya guardado otro.
// 👉 Para eso debemos agregar al principio de la función [5] en script 'Clase-13' la siguiente línea:
//     localStorage.setItem('user', JSON.stringify(estadoUsuario));

window.addEventListener("load", (e) => {
  const user = recuperarDataStorage();

  renderizarElementos(user);
  botonCerrarSesion();
});

function recuperarDataStorage() {
  const datosEnJSON = localStorage.getItem("user");

  const datosParseados = JSON.parse(datosEnJSON);

  return datosParseados;
}

function renderizarElementos(objeto) {
  const email = document.querySelector("#email");
  const perfil = document.querySelector("#perfil");

  email.innerText = objeto.email;
  perfil.innerText = objeto.rol;
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                     [9] FUNCION: Boton de cerrar sesion                    */
/* -------------------------------------------------------------------------- */


function botonCerrarSesion() {
  //    👇 desarrollar la función
  //localStorage.removeItem("key");
  //localStorage.clear();

  //Crear
  const elementoUser = document.querySelector(".user");
  const boton = document.createElement("button");
  boton.innerText = "Cerrar sesión";
  
  
  //Estilar boton
  boton.style.padding = "5px 20px";
  boton.style.backgroundColor = "rgba(255,0,0,0.2)";
  boton.style.color = "red";
  boton.style.margin = "20px";
  boton.style.border = "none";
  boton.style.cursor = "pointer";
  
  //Agregar boton a pantalla
  elementoUser.appendChild(boton);

  //Animacion

  boton.addEventListener("mouseover", () =>{
    boton.style.backgroundColor = "grey";
  })

  boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = "rgba(255,0,0,0.2)";
  })


  //Evento click
  boton.addEventListener("click", () =>{
    const confirmacion = confirm("¿Seguro desea cerrar sesión?");
    if(confirmacion) {
      localStorage.clear();
      location.replace("./index.html");
    }
  
  })
}
