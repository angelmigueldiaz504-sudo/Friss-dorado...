function buscarmenu() {

    // Obtener lo que escribió el usuario
    let busqueda = document.getElementById("buscar").value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    // Si no escribió nada
    if (busqueda === "") {
        alert("Por favor, escribe algo para buscar.");
        return;
    }

    // MENUALMUEROS
    let almuerzos = [
        "Arroz mixto";
        "Bagre frito";
        "Churrasco argentino";
        "Picada boyacense";
        "Sobre barriga en salsa criolla";
        "Bistec friss medio";
        "Bistec friss entero";
        "Churrasco de la casa medio";
        "Churrasco de la casa entero";
        "Churrasco argentino medio";
        "Churrasco argentino entero" ;
        "Lomo de res salteado";
        "Bandeja de pollo asado";
        "Costillas de cerdo BBQ";
        "Churrasco de la casa medio";
        "Churrasco de la casa entero" ;
        "Pechuga en salsa de champiñones";
        "Pechuga a la plancha medio" ;
        "Pechuga a la plancha entero";
        "Pechuga de pollo salteado";
        "Cazuela de mariscos"
        "Mojarra marinera";
        "Mojarra frita" ;
        "Trucha en salsa de maracuyá" ;
        "Trucha de ajillo" ;
        "Trucha gratinada" ;
        "Trucha a la plancha";
        "Lomo de cerdo a la plancha" ;
        "Lomo de cerdo en maracuyá" ;
        "Lomo de cerdo hawaiano" ;
        "Lomo de cerdo gratinado";
    ];

    // MENUBEBIDAS
    let BEBIDAS = [
        "Jugos en leche";
        "Jugos en agua";
        "Jugo de maracuyá";
        "Cerezada";
        "Limonada de coco";
        "Limonada natural"; 
        "Limonada",
    ];

    // CATALOGO
    let CATALOGO = [
        "Alitas BBQ";
        "Costillas BBQ"; 
        "Hamburguesa argentina";
        "Hamburguesa especial dorado";
        "Hamburguesa mexicana";
        "Mazorcada";
        "Salchipapa costeña";
        "Hamburguesa doble carne";
        "Hamburguesa mexicana doble"; 
        "Hamburguesa mexicana sencilla";
        "Hamburguesa mixta";
        "Hamburguesa clásica";
        "Salchipapa clásica";
        "Hamburguesa";
        "salchipapa";
    ];



    // Buscar coincidencias
    if (almuerzos.includes(busqueda)) {
        window.location.href = "MENUALMUEROS.html";
    }

    else if (BEBIDAS.includes(busqueda)) {
        window.location.href = "MENUBEBIDAS.html";
    }

    else if (menu.includes(busqueda)) {
        window.location.href = "MENUCTALAGO.JS";
    }

    else {
        alert("No encontramos ningún sistema relacionado con tu búsqueda.");
    }
}