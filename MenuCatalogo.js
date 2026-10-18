const productos = [
    {
        nombre: "Alitas BBQ",
        precio: 16000,
        imagen: "Imagenes/Comidas Rapidas/Alitas BBQ.jpeg"
    },
    {
        nombre: "Costillas BBQ",
        precio: 18000,
        imagen: "Imagenes/Comidas Rapidas/Costillas BBQ.jpeg"
    },
    {
        nombre: "Hamburguesa Argentina",
        precio: 20000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa Argentina.jpeg"
    },
    {
        nombre: "Hamburguesa Especial Dorado",
        precio: 15000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa Especial Dorado.jpeg"
    },
    {
        nombre: "Hamburguesa Mexicana",
        precio: 35000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa mexican.jpeg"
    },
    {
        nombre: "Mazorcada",
        precio: 8000,
        imagen: "Imagenes/Comidas Rapidas/Mazorcada.jpeg"
    },
    {
        nombre: "Salchipapa Costeña",
        precio: 14000,
        imagen: "Imagenes/Comidas Rapidas/Salchipapa costeña.jpeg"
    },
        {
        nombre: "Hamburguesa doble carne",
        precio: 23000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa doble carne.jpeg"
    },
        {
        nombre: "Hamburguesa mexicana doble",
        precio: 23000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa mexicana doble.jpeg"
    },
        {
        nombre: "Hamburguesa mexicana sencilla",
        precio: 27000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa mexicana doble.jpeg"
    },
        {
        nombre: "Hamburguesa mixta",
        precio: 23000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa mixta.jpeg"
    },
        {
        nombre: "Hamburguesa clásica",
        precio: 18000,
        imagen: "Imagenes/Comidas Rapidas/Hamburguesa clasica.jpeg"
    },
    {
        nombre: "Salchipapa clásica",
        precio: 25000,
        imagen: "Imagenes/Comidas Rapidas/Salchipapa clasica.jpeg"
    },
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