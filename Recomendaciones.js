/* =========================================
   RECOMENDACIONES DIARIAS DEL CHEF - FRISS DORADO
   (22 platos y especialidades que rotan por día)
========================================= */

(function () {
    "use strict";

    const recomendaciones = [
        {
            nombre: "Bandeja de pollo broaster",
            categoria: "Almuerzo Especial",
            pagina: "MenuAlmuerzos.html",
            precio: 16000,
            imagen: "Imagenes/Almuerzos/Bandeja de pollo broaster.jpeg",
            titulo: "¡La especialidad crujiente!",
            texto: "Pollo broaster crocante por fuera y súper jugoso por dentro, acompañado de arroz, papa y ensalada fresca."
        },
        {
            nombre: "Hamburguesa Especial Dorado",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 15000,
            imagen: "Imagenes/Comidas Rapidas/Hamburguesa Especial Dorado.jpeg",
            titulo: "¡El clásico de la casa!",
            texto: "Carne a la parrilla con tocineta crujiente, queso fundido, vegetales frescos y la salsa secreta Friss Dorado."
        },
        {
            nombre: "Churrasco Argentino",
            categoria: "Parrilla y Carnes",
            pagina: "MenuAlmuerzos.html",
            precio: 20000,
            imagen: "Imagenes/Almuerzos/Churrasco Argentino.jpeg",
            titulo: "¡Para los amantes de la carne!",
            texto: "Corte de churrasco tierno y jugoso asado al carbón en su punto óptimo, servido con papas y chimichurri artesanal."
        },
        {
            nombre: "Alitas BBQ",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 16000,
            imagen: "Imagenes/Comidas Rapidas/Alitas BBQ.jpeg",
            titulo: "¡Bañadas en salsa ahumada!",
            texto: "Alitas doradas y crujientes con salsa BBQ casera agridulce, acompañadas de papitas a la francesa."
        },
        {
            nombre: "Picada Boyacense",
            categoria: "Para Compartir",
            pagina: "MenuAlmuerzos.html",
            precio: 38000,
            imagen: "Imagenes/Almuerzos/Picada Boyacense.jpeg",
            titulo: "¡Puro sabor tradicional!",
            texto: "Abundante combinación de carnes selectas, longaniza, costilla, papa criolla, plátano y arepa boyacense."
        },
        {
            nombre: "Hamburguesa Mexicana",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 35000,
            imagen: "Imagenes/Comidas Rapidas/Hamburguesa mexican.jpeg",
            titulo: "¡Explosión de sabor!",
            texto: "Carne premium con jalapeños, queso cheddar derretido, totopos crujientes y guacamole recién preparado."
        },
        {
            nombre: "Trucha al ajillo",
            categoria: "Pescados y Mariscos",
            pagina: "MenuAlmuerzos.html",
            precio: 34000,
            imagen: "Imagenes/Almuerzos/Trucha al ajillo.jpeg",
            titulo: "¡Frescura y aroma inigualable!",
            texto: "Filete de trucha dorada bañada en una suculenta reducción de ajo dorado, mantequilla y finas hierbas."
        },
        {
            nombre: "Costillas de cerdo BBQ",
            categoria: "Parrilla Especial",
            pagina: "MenuAlmuerzos.html",
            precio: 32000,
            imagen: "Imagenes/Almuerzos/Costillas de cerdo BBQ.jpeg",
            titulo: "¡Tiernas hasta el hueso!",
            texto: "Costillas de cerdo caramelizadas a fuego lento con salsa BBQ de la casa. ¡Se deshacen en tu boca!"
        },
        {
            nombre: "Limonada de Coco",
            categoria: "Bebida Refrescante",
            pagina: "MenuBebidas.html",
            precio: 5000,
            imagen: "Imagenes/Bebidas/Limonada De Coco.jpeg",
            titulo: "¡Cremosa y helada!",
            texto: "Limonada de coco frappé súper cremosa, el toque dulce y refrescante ideal para acompañar tus platos favoritos."
        },
        {
            nombre: "Bandeja de pollo asado",
            categoria: "Almuerzo Tradicional",
            pagina: "MenuAlmuerzos.html",
            precio: 15000,
            imagen: "Imagenes/Almuerzos/Bandeja de pollo asado.jpeg",
            titulo: "¡El auténtico sabor asado!",
            texto: "Pollo sazonado con especias secretas y asado lentamente hasta lograr un dorado perfecto con piel crujiente."
        },
        {
            nombre: "Hamburguesa Argentina",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 20000,
            imagen: "Imagenes/Comidas Rapidas/Hamburguesa Argentina.jpeg",
            titulo: "¡Sabor gaucho a la parrilla!",
            texto: "Carne de res jugosa con chorizo parrillero, queso fundido, lechuga crocante y chimichurri artesanal."
        },
        {
            nombre: "Sobre barriga en salsa criolla",
            categoria: "Almuerzo Típico",
            pagina: "MenuAlmuerzos.html",
            precio: 28000,
            imagen: "Imagenes/Almuerzos/Sobre barriga en salsa criolla.jpeg",
            titulo: "¡Suavidad criolla casera!",
            texto: "Sobrebarriga tierna cocinada a fuego lento y bañada en abundante hogao tradicional de tomate y cebolla."
        },
        {
            nombre: "Costillas BBQ",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 18000,
            imagen: "Imagenes/Comidas Rapidas/Costillas BBQ.jpeg",
            titulo: "¡Piqueo irresistible!",
            texto: "Porción de costillas doradas con salsa barbacoa ahumada, perfectas para calmar cualquier antojo."
        },
        {
            nombre: "Pechuga en salsa de champiñones",
            categoria: "Plato Especial",
            pagina: "MenuAlmuerzos.html",
            precio: 32000,
            imagen: "Imagenes/Almuerzos/Pechuga en salsa de champiñon.jpeg",
            titulo: "¡Elegante y deliciosa!",
            texto: "Pechuga de pollo a la plancha cubierta de una suave crema artesanal con champiñones frescos salteados."
        },
        {
            nombre: "Salchipapa Costeña",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 14000,
            imagen: "Imagenes/Comidas Rapidas/Salchipapa costeña.jpeg",
            titulo: "¡Un antojo cargado de sabor!",
            texto: "Cama de papas crujientes con salchicha premium, lluvia de queso costeño rallado y salsas de la casa."
        },
        {
            nombre: "Mojarra frita",
            categoria: "Pescados",
            pagina: "MenuAlmuerzos.html",
            precio: 30000,
            imagen: "Imagenes/Almuerzos/Mojarra frita.jpeg",
            titulo: "¡Crocancia marina!",
            texto: "Mojarra entera frita al punto exacto, servida con patacón dorado, arroz con coco y ensalada fresca."
        },
        {
            nombre: "Cerezada",
            categoria: "Bebida Especial",
            pagina: "MenuBebidas.html",
            precio: 5000,
            imagen: "Imagenes/Bebidas/Cerezada.jpeg",
            titulo: "¡Dulce, fresca y colorida!",
            texto: "Deliciosa bebida frappé a base de cerezas seleccionadas con un refrescante toque de limón natural."
        },
        {
            nombre: "Lomo de cerdo en maracuyá",
            categoria: "Plato Gourmet",
            pagina: "MenuAlmuerzos.html",
            precio: 30000,
            imagen: "Imagenes/Almuerzos/Lomo de cerdo en maracuya.jpeg",
            titulo: "¡Equilibrio agridulce!",
            texto: "Tiernos medallones de lomo de cerdo glaseados con salsa artesanal de maracuyá natural."
        },
        {
            nombre: "Mazorcada",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 8000,
            imagen: "Imagenes/Comidas Rapidas/Mazorcada.jpeg",
            titulo: "¡Maíz tierno desgranado!",
            texto: "Maíz dulce salteado con trocitos de pollo, queso derretido, papa fosforito y aderezos especiales."
        },
        {
            nombre: "Cazuela de mariscos",
            categoria: "Especialidad de Mar",
            pagina: "MenuAlmuerzos.html",
            precio: 42000,
            imagen: "Imagenes/Almuerzos/Cazuela de mariscos.jpeg",
            titulo: "¡La reina del mar!",
            texto: "Exquisita cazuela con variedad de mariscos cocidos en leche de coco con finas hierbas y queso gratinado."
        },
        {
            nombre: "Hamburguesa clásica",
            categoria: "Comidas Rápidas",
            pagina: "Catalogo.html",
            precio: 18000,
            imagen: "Imagenes/Comidas Rapidas/Hamburguesa clasica.jpeg",
            titulo: "¡Insuperable y tradicional!",
            texto: "Carne de res seleccionada, queso americano, vegetales frescos, cebolla grillé y pan artesanal tostado."
        },
        {
            nombre: "Jugo de Maracuya",
            categoria: "Bebida Natural",
            pagina: "MenuBebidas.html",
            precio: 5000,
            imagen: "Imagenes/Bebidas/Jugo de Maracuya.jpeg",
            titulo: "¡Pura fruta fresca!",
            texto: "Jugo 100% natural preparado al momento con pulpa fresca para acompañar tus mejores almuerzos."
        }
    ];

    function inicializarRecomendaciones() {
        const botonTip = document.getElementById("botonTip");
        const ventanaTip = document.getElementById("ventanaTip");
        const cerrarTip = document.getElementById("cerrarTip");
        const diaTip = document.getElementById("diaTip");
        const imgTip = document.getElementById("imgTip");
        const categoriaTip = document.getElementById("categoriaTip");
        const nombrePlatoTip = document.getElementById("nombrePlatoTip");
        const precioPlatoTip = document.getElementById("precioPlatoTip");
        const textoTip = document.getElementById("textoTip");
        const tarjetaRecomendacion = document.getElementById("tarjetaRecomendacion");
        const btnAgregarTip = document.getElementById("btnAgregarTip");
        const btnOtroPlato = document.getElementById("btnOtroPlato");

        if (!botonTip || !ventanaTip) return;

        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

        const fechaHoy = new Date();
        const diaDelAno = Math.floor((fechaHoy - new Date(fechaHoy.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        let indiceActual = diaDelAno % recomendaciones.length;

        function renderizarRecomendacion(indice) {
            const plato = recomendaciones[indice];

            if (diaTip) {
                diaTip.textContent = `${diasSemana[fechaHoy.getDay()]}, ${fechaHoy.getDate()} ${meses[fechaHoy.getMonth()]}`;
            }
            if (nombrePlatoTip) {
                nombrePlatoTip.textContent = plato.nombre;
            }
            if (precioPlatoTip) {
                precioPlatoTip.textContent = `$${plato.precio.toLocaleString("es-CO")} COP`;
            }
            if (categoriaTip) {
                categoriaTip.textContent = plato.categoria;
            }
            if (textoTip) {
                textoTip.textContent = plato.texto;
            }
            if (imgTip) {
                imgTip.src = plato.imagen;
                imgTip.alt = plato.nombre;
                imgTip.onerror = function () {
                    this.onerror = null;
                    this.src = "Imagenes/Pollo-Friss-Simbolo.png";
                };
            }
        }

        // Clic en el botón flotante (abrir/cerrar)
        botonTip.addEventListener("click", function (evento) {
            evento.stopPropagation();
            ventanaTip.classList.toggle("mostrar");
        });

        // Clic en cerrar
        if (cerrarTip) {
            cerrarTip.addEventListener("click", function (evento) {
                evento.stopPropagation();
                ventanaTip.classList.remove("mostrar");
            });
        }

        // Clic en la tarjeta -> Lleva al producto en su menú
        if (tarjetaRecomendacion) {
            tarjetaRecomendacion.addEventListener("click", function () {
                const plato = recomendaciones[indiceActual];
                sessionStorage.setItem("productoDestacado", plato.nombre);
                window.location.href = `${plato.pagina}?producto=${encodeURIComponent(plato.nombre)}`;
            });
        }

        // Botón agregar directo al carrito
        if (btnAgregarTip) {
            btnAgregarTip.addEventListener("click", function (evento) {
                evento.stopPropagation();
                const plato = recomendaciones[indiceActual];
                if (typeof agregarAlCarrito === "function") {
                    agregarAlCarrito(plato.nombre, plato.precio);
                }
            });
        }

        // Botón ver otra opción
        if (btnOtroPlato) {
            btnOtroPlato.addEventListener("click", function (evento) {
                evento.stopPropagation();
                indiceActual = (indiceActual + 1) % recomendaciones.length;
                renderizarRecomendacion(indiceActual);
            });
        }

        // Cerrar al hacer clic fuera
        document.addEventListener("click", function (evento) {
            if (!ventanaTip.contains(evento.target) && !botonTip.contains(evento.target)) {
                ventanaTip.classList.remove("mostrar");
            }
        });

        // Cargar primera recomendación
        renderizarRecomendacion(indiceActual);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", inicializarRecomendaciones);
    } else {
        inicializarRecomendaciones();
    }
})();
