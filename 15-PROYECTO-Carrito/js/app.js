let carritoProductos = [

]

let carrito = document.getElementById("lista-carrito")
let tbodyCarrito = carrito.querySelector("tbody");

let columnaProducto = document.querySelector('.card');

// Cuando se pulse un boton de añadir al carrito
// captura los elementos padres de su div
document.addEventListener("click", function (e) {

    if (e.target.text === "Agregar Al Carrito") {

        tbodyCarrito.innerHTML = "";
        let infoCard = e.target.parentNode;
        let card = infoCard.parentNode;

        let img = card.querySelector(".imagen-curso.u-full-width").src; // no esta bien pillada la imagen aquí

        let titulo = infoCard.childNodes[1].innerText; // texto del titulo

        let precio = infoCard.childNodes[7].childNodes[1].innerText; // precio

        let cantidad = 1; // indico la cantidad inicial

        let id = infoCard.childNodes[9].getAttribute('data-id');

        // Busco si hay algun producto con ese mismo titulo
        let cantidadD = carritoProductos.find(producto => producto.titulo === titulo);

        // Si lo hay es diferente a undifined (tiene contenido)
        if (cantidadD !== undefined) {

            // Sumo la cantidad
            for (let i = 0; i < carritoProductos.length; i++) {
                if (carritoProductos[i].titulo === titulo) {
                    carritoProductos[i].cantidad++;
                }

            }

        } else {

            let producto = {

                "img": img,
                "titulo": titulo,
                "precio": precio,
                "cantidad": cantidad,
                "id": id

            }

            carritoProductos.push(producto);

        };

        for (let i = 0; i < carritoProductos.length; i++) {

            tbodyCarrito.innerHTML += "<tr><td>" + "<img src='" + carritoProductos[i].img + "' width='100px'></img></td><td>" + carritoProductos[i].titulo + "</td><td>"
                + carritoProductos[i].precio + "</td><td>" + carritoProductos[i].cantidad + "</td><td> <button class='eliminar-curso' data-id=" + carritoProductos[i].id +">Borrar</button>" +
                "</td></tr>";

        }

    };

})

// Vaciar carrito al completo

let vaciarCarrito = document.getElementById("vaciar-carrito");

vaciarCarrito.addEventListener("click", function () {

    carritoProductos = [];
    tbodyCarrito.innerHTML = "";

})

// Borrar producto carrito

tbodyCarrito.addEventListener("click" , function (e) {

    if (e.target.classList.contains('eliminar-curso')) {
        
        let idEliminar = e.target.getAttribute('data-id');

        carritoProductos =  carritoProductos.filter ( producto => producto.id !== idEliminar );

        if (carritoProductos.length === 0) {

            tbodyCarrito.innerHTML = "";

        } else {

            tbodyCarrito.innerHTML = "";
            for (let i = 0; i < carritoProductos.length; i++) {

                tbodyCarrito.innerHTML += "<tr><td>" + "<img src='" + carritoProductos[i].img + "' width='100px'></img></td><td>" + carritoProductos[i].titulo + "</td><td>"
                + carritoProductos[i].precio + "</td><td>" + carritoProductos[i].cantidad + "</td><td> <button class='eliminar-curso' data-id=" + carritoProductos[i].id +">Borrar</button>" +
                "</td></tr>";
    
            }
        }
    };

});
