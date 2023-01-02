/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: Consulta a la API                       */
/* -------------------------------------------------------------------------- */

function consultaApi(endpoint) {
    fetch(endpoint)
    .then((objetoRespuesta) => {
      console.log(objetoRespuesta);
      const promesaJson = objetoRespuesta.json();
      return promesaJson;
    })
    .then((promesaJson) => {
      console.log(promesaJson);
      renderizadoElementos(promesaJson);
    })
    .catch (error => {
      console.log("Fijate lo que haces por favor: " + error);
    })
  }


/* -------------------------------------------------------------------------- */
/*                      [5] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
// Vamos a reimplementar la escucha del click lanzar las nuevas funciones.

const boton = document.querySelector("button");
const endpoint = "https://jsonplaceholder.typicode.com/comments";
boton.addEventListener("click", () => {
  console.log("Clink para ver comentarios...");
  consultaApi(endpoint);
});

/* -------------------------------------------------------------------------- */
/*                      [6] FUNCION: renderizar elementos                     */
/* -------------------------------------------------------------------------- */
// Acá vamos a reutilizar la función de renderizar renderizarElementos, implementando
// el .map() y .join() para obtener el resultado esperado.

function renderizadoElementos(lista) {
  const comentarios = document.querySelector(".comentarios");
  let cont = 0;
  if(lista.length > 0) {
boton.style.display = "none";
  comentarios.innerHTML = lista
    .map((item) => {
      cont++;
      if(cont < 11){
        return `<div class="comentario">
        <h4>${item.email}</h4>
        <p>${item.body}</p>
      </div>
    `;
      }      
    })
    .join("");
  
  }
  else {
    alert("Creaste un error nuevo, el servidor se choteo");
  }
}

