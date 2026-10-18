const productos = [
    {
        nombre: "Arroz Mixto",
        precio: 15000,
        imagen: "Imagenes/Almuerzos/Arroz Mixto.jpeg"
    },
    {
        nombre: "Bagre Frito",
        precio: 18000,
        imagen: "Imagenes/Almuerzos/Bagre Frito.jpeg"
    },
    {
        nombre: "Churrasco Argentino",
        precio: 20000,
        imagen: "Imagenes/Almuerzos/Churrasco Argentino.jpeg"
    },
    {
        nombre: "Picada Boyacense",
        precio: 38000,
        imagen: "Imagenes/Almuerzos/Picada Boyacense.jpeg"
    },
    {
        nombre: "Sobre barriga en salsa criolla",
        precio: 28000,
        imagen: "Imagenes/Almuerzos/Sobre barriga en salsa criolla.jpeg"
    },
    {
        nombre: "Bistec Friss (medio)",
        precio: 19000,
        imagen: "Imagenes/Almuerzos/Bistec Friss medio.jpeg"
  },
    {
        nombre: "Bistec Friss (entero)",
        precio: 33000,
        imagen: "Imagenes/Almuerzos/Bistec Friss medio.jpeg"
    },
    {
        nombre: "Churrasco de la casa (medio)",
        precio: 19500,
        imagen: "Imagenes/Almuerzos/Churrasco de la casa medio.jpeg"
    },
    {
        nombre: "Churrasco de la casa (entero)",
        precio: 34000,
        imagen: "Imagenes/Almuerzos/Churrasco de la casa medio.jpeg"
    },
    {
        nombre: "Churrasco argentino (medio)",
        precio: 18000,
        imagen: "Imagenes/Almuerzos/Churrasco argentino medio.jpeg"
    },
    {
        nombre: "Churrasco argentino (entero)",
        precio: 32000,
        imagen: "Imagenes/Almuerzos/Churrasco argentino medio.jpeg"
    },
    {
        nombre: "Lomo de res salteado",
        precio: 35000,
        imagen: "Imagenes/Almuerzos/Lomo de res salteado.jpeg"
    },
    {
        nombre: "Bandeja de pollo broaster",
        precio: 16000,
        imagen: "Imagenes/Almuerzos/Bandeja de pollo broaster.jpeg"
    },
    {
        nombre: "Bandeja de pollo asado",
        precio: 15000,
        imagen: "Imagenes/Almuerzos/Bandeja de pollo asado.jpeg"
    },
    {
        nombre: "Costillas de cerdo BBQ",
        precio: 32000,
        imagen: "Imagenes/Almuerzos/Costillas de cerdo BBQ.jpeg"
    },
    {
        nombre: "Churrasco de la casa (medio)",
        precio: 19500,
        imagen: "Imagenes/Almuerzos/Churrasco de la casa medio.jpeg"
    },
    {
        nombre: "Churrasco de la casa (entero)",
        precio: 34000,
        imagen: "Imagenes/Almuerzos/Churrasco de la casa medio.jpeg"
    },
    {
        nombre: "Pechuga en salsa de champiñones",
        precio: 32000,
        imagen: "Imagenes/Almuerzos/Pechuga en salsa de champiñon.jpeg"
    },
    {
        nombre: "Pechuga a la plancha (medio)",
        precio: 17000,
        imagen: "Imagenes/Almuerzos/Pechuga a la salsa medio.jpeg"
    },
    {
        nombre: "Pechuga a la plancha (entero)",
        precio: 29000,
        imagen: "Imagenes/Almuerzos/Pechuga a la salsa medio.jpeg"
    },
    {
        nombre: "Pechuga de pollo salteado",
        precio: 30000,
        imagen: "Imagenes/Almuerzos/Pechuga de pollo salteado.jpeg"
    },
    {
        nombre: "Cazuela de mariscos",
        precio: 42000,
        imagen: "Imagenes/Almuerzos/Cazuela de mariscos.jpeg"
    },
    {
        nombre: "Mojarra marinera",
        precio: 38000,
        imagen: "Imagenes/Almuerzos/Mojarra marinera.jpeg"
    },
    {
        nombre: "Mojarra frita",
        precio: 30000,
        imagen: "Imagenes/Almuerzos/Mojarra frita.jpeg"
    },
    {
        nombre: "Trucha en salsa de maracuyá",
        precio: 34000,
        imagen: "Imagenes/Almuerzos/Trucha en salsa de maracuya.jpeg"
    },
    {
        nombre: "Trucha al ajillo",
        precio: 34000,
        imagen: "Imagenes/Almuerzos/Trucha al ajillo.jpeg"
    },
    {
        nombre: "Trucha gratinada",
        precio: 34000,
        imagen: "Imagenes/Almuerzos/Trucha gratinada.jpeg"
    },
    {
        nombre: "Trucha a la plancha",
        precio: 32000,
        imagen: "Imagenes/Almuerzos/Trucha a la plancha.jpeg"
    },
    {
        nombre: "Lomo de cerdo a la plancha",
        precio: 30000,
        imagen: "Imagenes/Almuerzos/Lomo de cerdo a la plancha.jpeg"
    },
    {
        nombre: "Lomo de cerdo en maracuyá",
        precio: 30000,
        imagen: "Imagenes/Almuerzos/Lomo de cerdo en maracuya.jpeg"
    },
    {
        nombre: "Lomo de cerdo hawaiana",
        precio: 32000,
        imagen: "Imagenes/Almuerzos/Lomo de cerdo hawaiana.jpeg"
    },
    {
        nombre: "Lomo de cerdo gratinado",
        precio: 32000,
        imagen: "Imagenes/Almuerzos/Lomo de cerdo gratinado.jpeg"
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