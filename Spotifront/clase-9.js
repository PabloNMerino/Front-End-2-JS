// nuevo array con listado de planes
const planesMensuales = [{
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];

window.addEventListener('load', function () {
    const footer = document.querySelector('footer');

    let contador = 0
    
    const intervalo = this.setInterval(() => {
        let posicion = contador % planesMensuales.length;
        footer.innerHTML = `<p>Plan: <strong>${planesMensuales[posicion].tipo}</strong> $ ${planesMensuales[posicion].costo}</p><p>${planesMensuales[posicion].descripcion}</p>`
        // aumentamos el contador
        contador++;

    }, 3000)
    // añadimos la escucha del doble click en el footer para frenar el intervalo
    footer.addEventListener('dblclick', function () {
        clearInterval(intervalo);
        console.log("---> Frenamos el intervalo");
    })
})



let respuestaConfirm;
let agregarInfo = document.querySelector(".perfil");
window.addEventListener("load", () => {
    const timeOut = setTimeout (() => {
        respuestaConfirm = confirm("Desea conocer mas musica?");
        if(respuestaConfirm){
            window.open("https://open.spotify.com/");
            console.log("se abre la pagina web");
        }
        else{
            
            let parrafoNuevo = document.createElement("p");
            let texto = document.createTextNode("Usuario oficial de Spotifront");
            parrafoNuevo.appendChild(texto);
            parrafoNuevo.style.color= "green"
            agregarInfo.appendChild(parrafoNuevo);
            parrafoNuevo.addEventListener("click", ()=>{
                alert("Gracias por confiar en nosotros");
            })
        }
        
    }, 2000)
})


let fechaActual = new Date;
agregarInfo.innerHTML += `<p>El día de hoy es ${fechaActual.getDate()} del ${fechaActual.getMonth()} del año ${fechaActual.getFullYear()}.</p>`