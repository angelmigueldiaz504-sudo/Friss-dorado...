// =========================
// CARRITO DE COMPRAS
// =========================

const CLAVE_CARRITO = "restaurante-andres-carrito";

let carrito = cargarCarrito();

const botonCarrito = document.getElementById("botonCarrito");
const panelCarrito = document.getElementById("panelCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const completarPedido = document.getElementById("completarPedido");

// =========================
// GUARDAR Y RECUPERAR CARRITO
// =========================

function cargarCarrito() {
    try {
        const carritoGuardado = localStorage.getItem(CLAVE_CARRITO);

        if (!carritoGuardado) {
            return [];
        }

        const productos = JSON.parse(carritoGuardado);

        if (!Array.isArray(productos)) {
            return [];
        }

        return productos.filter(producto =>
            typeof producto.nombre === "string" &&
            Number.isFinite(producto.precio) &&
            Number.isInteger(producto.cantidad) &&
            producto.cantidad > 0
        );
    } catch (error) {
        return [];
    }
}

function guardarCarrito() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// =========================
// ABRIR Y CERRAR CARRITO
// =========================

botonCarrito.addEventListener("click", () => {
    panelCarrito.classList.toggle("abierto");
});

cerrarCarrito.addEventListener("click", () => {
    panelCarrito.classList.remove("abierto");
});

// =========================
// AGREGAR PRODUCTOS
// =========================

document.querySelectorAll(".btn-agregar").forEach(boton => {
    boton.addEventListener("click", () => {
        agregarAlCarrito(
            boton.dataset.nombre,
            Number(boton.dataset.precio)
        );
    });
});

function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    actualizarCarrito();
    panelCarrito.classList.add("abierto");
}

// =========================
// MOSTRAR CARRITO
// =========================

function actualizarCarrito() {
    guardarCarrito();

    listaCarrito.innerHTML = "";

    let total = 0;
    let cantidadTotal = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;
    }

    carrito.forEach((producto, indice) => {
        const subtotal = producto.precio * producto.cantidad;

        total += subtotal;
        cantidadTotal += producto.cantidad;

        const item = document.createElement("div");
        item.classList.add("item-carrito");

        item.innerHTML = `
            <div>
                <strong>${producto.nombre}</strong>
                <p>$${producto.precio.toLocaleString("es-CO")} COP</p>
            </div>

            <div class="controles-carrito">
                <button onclick="disminuirProducto(${indice})">−</button>

                <span>${producto.cantidad}</span>

                <button onclick="aumentarProducto(${indice})">+</button>

                <button
                    class="eliminar-producto"
                    onclick="eliminarProducto(${indice})"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        listaCarrito.appendChild(item);
    });

    cantidadCarrito.textContent = cantidadTotal;
    totalCarrito.textContent =
        `$${total.toLocaleString("es-CO")} COP`;
}

function aumentarProducto(indice) {
    carrito[indice].cantidad++;
    actualizarCarrito();
}

function disminuirProducto(indice) {
    carrito[indice].cantidad--;

    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }

    actualizarCarrito();
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

// =========================
// PEDIDO POR WHATSAPP
// =========================

completarPedido.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "Hola, quiero realizar el siguiente pedido:\n\n";
    let total = 0;

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        mensaje += `• ${producto.nombre} x${producto.cantidad} - $${subtotal.toLocaleString("es-CO")} COP\n`;
    });

    mensaje += `\nTotal: $${total.toLocaleString("es-CO")} COP`;

    const numero = "573102606290";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});

// =========================
// INICIAR CARRITO
// =========================

actualizarCarrito();


// =========================
// RESALTAR PRODUCTO SI VIENE DESDE RECOMENDACIÓN
// =========================

function verificarProductoDestacado() {
    try {
        const parametros = new URLSearchParams(window.location.search);
        const nombreBuscado = parametros.get("producto") || sessionStorage.getItem("productoDestacado");

        if (!nombreBuscado) return;

        sessionStorage.removeItem("productoDestacado");

        const intentarResaltar = (intentosRestantes) => {
            const tarjetas = document.querySelectorAll(".producto");
            let encontrado = false;

            tarjetas.forEach(tarjeta => {
                const titulo = tarjeta.querySelector("h2");
                if (titulo && titulo.textContent.trim().toLowerCase() === nombreBuscado.toLowerCase()) {
                    tarjeta.scrollIntoView({ behavior: "smooth", block: "center" });
                    tarjeta.classList.add("producto-destacado");
                    encontrado = true;

                    setTimeout(() => {
                        tarjeta.classList.remove("producto-destacado");
                    }, 4500);
                }
            });

            if (!encontrado && intentosRestantes > 0) {
                setTimeout(() => intentarResaltar(intentosRestantes - 1), 250);
            }
        };

        // Iniciar intentos tras el renderizado de productos
        setTimeout(() => intentarResaltar(6), 350);

    } catch (e) {
        console.error("Error al destacar producto:", e);
    }
}

verificarProductoDestacado();