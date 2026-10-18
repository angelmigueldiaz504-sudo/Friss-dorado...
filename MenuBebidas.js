const productos = [
    {
        nombre: "Jugo de Maracuya",
        precio: 5000,
        imagen: "Imagenes/Bebidas/Jugo de Maracuya.jpeg"
    },
    {
        nombre: "Cerezada",
        precio: 5000,
        imagen: "Imagenes/Bebidas/Cerezada.jpeg"
    },
    {
        nombre: "Limonada de Coco",
        precio: 5000,
        imagen: "Imagenes/Bebidas/Limonada De Coco.jpeg"
    },
    {
        nombre: "Limonada",
        precio: 3000,
        imagen: "Imagenes/Bebidas/Limonada.jpeg"
    }
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
    const tarjeta = document.createElement("div");

    tarjeta.classList.add("producto");

    tarjeta.innerHTML = `
        <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
            loading="lazy"
            onerror="this.onerror=null; this.src='Imagenes/Pollo-Friss-Simbolo.png';"
        >

        <h2>${producto.nombre}</h2>

        <span>$${producto.precio.toLocaleString("es-CO")} COP</span>

        <button
            class="btn-agregar"
            data-nombre="${producto.nombre}"
            data-precio="${producto.precio}"
        >
            <i class="fa-solid fa-cart-plus"></i>
            Agregar
        </button>
    `;

    contenedor.appendChild(tarjeta);
});