let carritoProductos = [

]

let carrito = document.getElementById("lista-carrito")
let tbodyCarrito = carrito.querySelector("tbody");

let columnaProducto = document.querySelector('.card');

function borrado() {

    let boton = document.getElementById("borrar");
    for (let i = 0; i < carritoProductos.length; i++) {
        if (carritoProductos[i].titulo === boton.value) {

            if (carritoProductos[i] > 0) {
                carritoProductos.splice(carritoProductos[i] - 1, 1);
            }
            if (carritoProductos[i] === 0) {
                carritoProductos.splice(carritoProductos[i], 1);
            }

        }
    }

    console.log(carritoProductos);
    console.log(boton.value);

}

// Cuando se pulse un boton de añadir al carrito
// captura los elementos padres de su div
document.addEventListener("click", function (e) {

    if (e.target.text === "Agregar Al Carrito") {

        tbodyCarrito.innerHTML = "";
        let infoCard = e.target.parentNode;
        let card = infoCard.parentNode;

        let img = card.querySelector("img"); // noi esta bien pillada la imagen aquí

        let titulo = infoCard.childNodes[1].innerText; // texto del titulo

        let precio = infoCard.childNodes[7].childNodes[1].innerText; // precio

        let cantidad = 1; // indico la cantidad inicial

        let borrar = "<button id='borrar' value='" + titulo + "'onclick='borrado()'></button>"


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
                "borrar": borrar

            }

            carritoProductos.push(producto);

        };

        console.log(carritoProductos);

        for (let i = 0; i < carritoProductos.length; i++) {

            tbodyCarrito.innerHTML += "<tr><td>" + carritoProductos[i].img + "</td><td>" + carritoProductos[i].titulo + "</td><td>"
                + carritoProductos[i].precio + "</td><td>" + carritoProductos[i].cantidad + "</td><td>" + carritoProductos[i].borrar +
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

