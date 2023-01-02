
function marcarFavorito() {
    // seleccionamos todos lo botones de like
    const botonesLike = document.querySelectorAll('.fa-heart');

    botonesLike.forEach(boton => {
        // 👇 por cada boton escuchamos su click
        boton.addEventListener('click', function () {
            console.log(boton.id);

            // recorreremos el listado de albumes
            albumesFamosos.forEach(album => {
                // si encontramos al que coincide con el boton apretado,
                // le cambiamos la propiedad like por lo contrario
                if (album.id === boton.id) {
                    album.like = !album.like;
                }
            })

            //👇 post click debemos renderizar nuevamente las tarjetas
            renderizarAlbumes(albumesFamosos);
            //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
            marcarFavorito();
        })
    })

}
marcarFavorito()



function eliminarAlbum() {
    // desarrollar la función 👇

    window.addEventListener('keydown', (e) => {
        console.log(e);
        if (e.key.toLowerCase() === 'f') {
            const album = prompt('¿Que album desea eliminar?')
            console.log(album);

            const posicionBuscado = albumesFamosos.findIndex(obj => {
                console.log(obj.nombre);
                return obj.nombre.toLowerCase() === album.toLowerCase()
            })

            // si fue encontrado el nombre del almbum..
            if (posicionBuscado !== -1) {
                // 👇eliminamos elemento
                albumesFamosos.splice(posicionBuscado, 1)


                //👇 post click debemos renderizar nuevamente las tarjetas
                renderizarAlbumes(albumesFamosos);
                //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
                marcarFavorito();
            }
        }
    })

}

eliminarAlbum();