/* --------------------------- estado por defecto --------------------------- */

const estadoUsuario = {
  email: "",
  password: "",
  rol: "",
  terminos: false,
};

// ponemos en true solo cuando esté correcto

const estadoErroresOk = {
  email: false,
  password: false,
  rol: false,
  terminos: false,
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];

//inputs
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputRol = document.querySelector("#rol");
const inputTerminos = document.querySelector("#terminos");

//errors
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const rolError = document.querySelector("#rolError");
const terminosError = document.querySelector("#terminosError");

/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */

function mostrarErrores() {
  // por cada small mostramos u ocultamos el error
  estadoErroresOk.email
    ? emailError.classList.remove("visible")
    : emailError.classList.add("visible");

  estadoErroresOk.password
    ? passwordError.classList.remove("visible")
    : passwordError.classList.add("visible");

  estadoErroresOk.rol
    ? rolError.classList.remove("visible")
    : rolError.classList.add("visible");

  estadoErroresOk.terminos
    ? terminosError.classList.remove("visible")
    : terminosError.classList.add("visible");
}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener("change", (e) => {
  // 👇 actualizo el estado de la pantalla con los datos
  estadoUsuario.email = inputEmail.value;
  estadoUsuario.password = inputPassword.value;
  estadoUsuario.rol = inputRol.value;
  estadoUsuario.terminos = inputTerminos.checked;

  // 👇 actualizo el estado del error segun el estado del usuario
  estadoErroresOk.email = validarEmail(estadoUsuario.email);
  estadoErroresOk.password = validarPassword(estadoUsuario.password);
  estadoErroresOk.rol = validarRol(estadoUsuario.rol);
  estadoErroresOk.terminos = validarTerminos(estadoUsuario.terminos);

  // finalmente muestro los errores presentes
  mostrarErrores();
});

/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */

function validarEmail(email) {
  let resultado = false;

  /*
  if (
    email.includes("@") &&
    email.includes(".") &&
    !email.includes(" ") &&
    email.length > 5
  ) {
    resultado = true;
  }
  */

  // EJEMPLO CON EXPRESION REGULAR 👇
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (regex.test(email)) {
    resultado = true;
  }
  return resultado;
}

function validarPassword(password) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (
    !password.includes(" ") &&
    !password.includes("@") &&
    password.length > 6
  ) {
    resultado = true;
  }

  return resultado;
}

function validarRol(rol) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (rol === "frontend" || rol === "backend") {
    resultado = true;
  }

  return resultado;
}

function validarTerminos(terminos) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (terminos) {
    resultado = true;
  }
  return resultado;
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener("submit", (e) => {
  // prevenimos el default para manejar nososotro el comportamiento
  e.preventDefault();

  console.log(estadoUsuario);
  console.log(estadoErroresOk);

  if (
    estadoErroresOk.email &&
    estadoErroresOk.password &&
    estadoErroresOk.rol &&
    estadoErroresOk.terminos
  ) {
    navegarPaginaExito();
    // ☝ luego reemplazar esto por la funcion de éxito
  }
});

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */


function navegarPaginaExito() {
  //   desarrollar la funcion aqui
  const btnSubmit = document.querySelector("button");

  btnSubmit.setAttribute("disabled", true);
  btnSubmit.innerText = "Cargando...";

  localStorage.setItem("user", JSON.stringify(estadoUsuario));

  setTimeout(() => {
    location.replace("./usuario.html");
  }, 3000);
}
