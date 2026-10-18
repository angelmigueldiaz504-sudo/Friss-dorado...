/* =========================================
        PANTALLA DE CARGA - POLLO FRISS
========================================= */

(function () {
    "use strict";

    /* =========================================
       1. INYECTAR ESTILOS BASE (Garantiza consistencia en cualquier dispositivo)
    ========================================= */
    function inyectarEstilos() {
        if (document.getElementById("estilos-pantalla-carga")) return;

        const style = document.createElement("style");
        style.id = "estilos-pantalla-carga";
        style.textContent = `
            #pantallaCarga {
                position: fixed;
                inset: 0;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                height: 100dvh;
                min-height: 100%;
                background: radial-gradient(circle at center, #1c1c1c 0%, #101010 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                opacity: 1;
                visibility: visible;
                transition: opacity 0.5s ease, visibility 0.5s ease;
                overflow: hidden;
                box-sizing: border-box;
            }

            #pantallaCarga.ocultar {
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
            }

            .carga-contenido {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 18px;
                text-align: center;
                user-select: none;
            }

            .simbolo-carga-contenedor {
                width: 130px;
                height: 130px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                margin: 0 auto;
            }

            .logo-carga,
            .simbolo-svg {
                width: 100%;
                height: 100%;
                max-width: 130px;
                max-height: 130px;
                object-fit: contain;
                display: block;
                filter: drop-shadow(0 4px 14px rgba(255, 140, 0, 0.4));
                animation: aparecerSimbolo 0.7s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .spinner-carga {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 3.5px solid rgba(255, 140, 0, 0.15);
                border-top-color: #FF8C00;
                border-right-color: #FF8C00;
                animation: girarCarga 0.8s linear infinite;
                box-shadow: 0 0 15px rgba(255, 140, 0, 0.25);
            }

            .carga-contenido p {
                margin: 0;
                color: #FF8C00;
                font-size: 15px;
                font-weight: 600;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
            }

            @keyframes girarCarga {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            @keyframes aparecerSimbolo {
                from { opacity: 0; transform: scale(0.78); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    /* =========================================
       2. DETECTAR SECCIÓN ACTUAL
    ========================================= */
    function detectarSeccion() {
        const bodyAttr = (document.body && document.body.getAttribute("data-seccion")) || "";
        if (bodyAttr) return bodyAttr;

        const ruta = (window.location.pathname || "").toLowerCase();
        const titulo = (document.title || "").toLowerCase();

        if (ruta.includes("bebida") || titulo.includes("bebida")) {
            return "bebidas";
        }
        if (ruta.includes("almuerzo") || titulo.includes("almuerzo")) {
            return "almuerzos";
        }
        if (
            ruta.includes("catalogo") ||
            ruta.includes("rapida") ||
            titulo.includes("catálogo") ||
            titulo.includes("catalogo") ||
            titulo.includes("rápida") ||
            titulo.includes("rapida")
        ) {
            return "comidas-rapidas";
        }
        return "inicio";
    }

    /* =========================================
       3. OBTENER SÍMBOLO Y TEXTO POR SECCIÓN
    ========================================= */
    function obtenerContenido(seccion) {
        switch (seccion) {
            case "bebidas":
                return {
                    simboloHtml: `
                        <svg class="simbolo-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="vasoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)"/>
                                    <stop offset="25%" stop-color="rgba(255, 255, 255, 0.15)"/>
                                    <stop offset="80%" stop-color="rgba(255, 255, 255, 0.1)"/>
                                    <stop offset="100%" stop-color="rgba(255, 255, 255, 0.35)"/>
                                </linearGradient>
                                <linearGradient id="liquidoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FFD54F"/>
                                    <stop offset="50%" stop-color="#FF9800"/>
                                    <stop offset="100%" stop-color="#E65100"/>
                                </linearGradient>
                                <linearGradient id="pitilloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FFF9C4"/>
                                    <stop offset="50%" stop-color="#FF8C00"/>
                                    <stop offset="100%" stop-color="#D84315"/>
                                </linearGradient>
                                <linearGradient id="limonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FFEE58"/>
                                    <stop offset="100%" stop-color="#FFA000"/>
                                </linearGradient>
                                <filter id="brilloBebida" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#FF8C00" flood-opacity="0.45"/>
                                </filter>
                            </defs>
                            <g filter="url(#brilloBebida)">
                                <!-- Pitillo -->
                                <path d="M 64 50 L 80 18 L 88 22 L 72 52 Z" fill="url(#pitilloGrad)"/>
                                <path d="M 77 24 L 83 27 M 73 32 L 79 35" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
                                <!-- Base y Tallo -->
                                <ellipse cx="60" cy="98" rx="20" ry="4" fill="url(#vasoGrad)" stroke="#FFB300" stroke-width="1"/>
                                <path d="M 58 84 L 58 97 L 62 97 L 62 84 Z" fill="url(#vasoGrad)"/>
                                <!-- Líquido -->
                                <path d="M 40 50 C 40 76, 52 84, 60 84 C 68 84, 80 76, 80 50 Z" fill="url(#liquidoGrad)"/>
                                <!-- Cubitos de hielo -->
                                <rect x="47" y="52" width="11" height="11" rx="2.5" transform="rotate(15 47 52)" fill="#FFFFFF" fill-opacity="0.5" stroke="#FFE082" stroke-width="1"/>
                                <rect x="62" y="56" width="10" height="10" rx="2" transform="rotate(-20 62 56)" fill="#FFFFFF" fill-opacity="0.45" stroke="#FFE082" stroke-width="1"/>
                                <!-- Burbujas -->
                                <circle cx="53" cy="74" r="1.8" fill="#FFF9C4" opacity="0.7"/>
                                <circle cx="66" cy="72" r="1.3" fill="#FFF9C4" opacity="0.8"/>
                                <circle cx="58" cy="65" r="2.2" fill="#FFF9C4" opacity="0.6"/>
                                <circle cx="62" cy="78" r="1" fill="#FFF9C4" opacity="0.7"/>
                                <!-- Contorno de cristal -->
                                <path d="M 37 42 C 37 77, 51 85, 60 85 C 69 85, 83 77, 83 42 Z" fill="url(#vasoGrad)" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.5"/>
                                <ellipse cx="60" cy="42" rx="23" ry="5" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="1.5"/>
                                <!-- Rodaja de fruta -->
                                <g transform="translate(32, 34)">
                                    <circle cx="0" cy="0" r="13" fill="url(#limonGrad)" stroke="#FFF9C4" stroke-width="1.5"/>
                                    <circle cx="0" cy="0" r="10" fill="none" stroke="#FFF9C4" stroke-width="0.8" stroke-dasharray="2 1"/>
                                    <path d="M 0 0 L 8 4 M 0 0 L -8 4 M 0 0 L 4 -8 M 0 0 L -4 -8 M 0 0 L 0 9 M 0 0 L 0 -9" stroke="#FFF9C4" stroke-width="1" opacity="0.75"/>
                                </g>
                                <!-- Reflejo de luz -->
                                <path d="M 42 46 C 42 65, 47 75, 52 79" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.45"/>
                            </g>
                        </svg>
                    `,
                    texto: "Cargando bebidas..."
                };

            case "almuerzos":
                return {
                    simboloHtml: `
                        <svg class="simbolo-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="cubiertoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FFE082"/>
                                    <stop offset="45%" stop-color="#FFB300"/>
                                    <stop offset="100%" stop-color="#FF6F00"/>
                                </linearGradient>
                                <linearGradient id="platoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#2A2A2A"/>
                                    <stop offset="100%" stop-color="#141414"/>
                                </linearGradient>
                                <linearGradient id="aroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FFB300"/>
                                    <stop offset="100%" stop-color="#E65100"/>
                                </linearGradient>
                                <filter id="brilloCubiertos" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#FF8C00" flood-opacity="0.45"/>
                                </filter>
                            </defs>
                            <g filter="url(#brilloCubiertos)">
                                <!-- Plato de fondo -->
                                <circle cx="60" cy="60" r="46" fill="url(#platoGrad)" stroke="url(#aroGrad)" stroke-width="2.5"/>
                                <circle cx="60" cy="60" r="37" fill="none" stroke="#FF9800" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.6"/>
                                <!-- Tenedor -->
                                <g transform="rotate(-28 60 60)">
                                    <path d="M 47 48 L 47 88 C 47 92, 53 92, 53 88 L 53 48 Z" fill="url(#cubiertoGrad)"/>
                                    <circle cx="50" cy="87" r="1.5" fill="#141414"/>
                                    <path d="M 44 48 C 44 40, 56 40, 56 48 Z" fill="url(#cubiertoGrad)"/>
                                    <rect x="44.5" y="26" width="2" height="18" rx="1" fill="url(#cubiertoGrad)"/>
                                    <rect x="48.2" y="26" width="1.8" height="18" rx="0.9" fill="url(#cubiertoGrad)"/>
                                    <rect x="51.8" y="26" width="1.8" height="18" rx="0.9" fill="url(#cubiertoGrad)"/>
                                    <rect x="55.5" y="26" width="2" height="18" rx="1" fill="url(#cubiertoGrad)"/>
                                </g>
                                <!-- Cuchillo -->
                                <g transform="rotate(28 60 60)">
                                    <path d="M 67 48 L 67 88 C 67 92, 73 92, 73 88 L 73 48 Z" fill="url(#cubiertoGrad)"/>
                                    <circle cx="70" cy="87" r="1.5" fill="#141414"/>
                                    <path d="M 67 48 L 67 27 C 67 25, 71 24, 73 28 C 76 34, 76 43, 73 48 Z" fill="url(#cubiertoGrad)"/>
                                    <path d="M 67 27 L 67 48" stroke="#FFF8E1" stroke-width="1" opacity="0.8"/>
                                </g>
                            </g>
                        </svg>
                    `,
                    texto: "Cargando almuerzos..."
                };

            case "comidas-rapidas":
                return {
                    simboloHtml: `
                        <svg class="simbolo-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="panGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FFB300"/>
                                    <stop offset="100%" stop-color="#E65100"/>
                                </linearGradient>
                                <linearGradient id="panBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FFA000"/>
                                    <stop offset="100%" stop-color="#D84315"/>
                                </linearGradient>
                                <linearGradient id="carneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#6D4C41"/>
                                    <stop offset="50%" stop-color="#4E342E"/>
                                    <stop offset="100%" stop-color="#3E2723"/>
                                </linearGradient>
                                <linearGradient id="quesoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#FFF176"/>
                                    <stop offset="60%" stop-color="#FFB300"/>
                                    <stop offset="100%" stop-color="#FF8F00"/>
                                </linearGradient>
                                <linearGradient id="lechugaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#81C784"/>
                                    <stop offset="100%" stop-color="#388E3C"/>
                                </linearGradient>
                                <filter id="brilloBurg" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#FF6F00" flood-opacity="0.4"/>
                                </filter>
                            </defs>
                            <g filter="url(#brilloBurg)">
                                <!-- Pan Superior -->
                                <path d="M 22 48 C 22 22, 98 22, 98 48 C 98 52, 22 52, 22 48 Z" fill="url(#panGrad)"/>
                                <ellipse cx="60" cy="27" rx="26" ry="5" fill="#FFE082" opacity="0.35"/>
                                <!-- Semillas de sésamo -->
                                <ellipse cx="44" cy="34" rx="2" ry="1.2" fill="#FFF9C4" transform="rotate(-15 44 34)"/>
                                <ellipse cx="60" cy="30" rx="2" ry="1.2" fill="#FFF9C4"/>
                                <ellipse cx="76" cy="35" rx="2" ry="1.2" fill="#FFF9C4" transform="rotate(20 76 35)"/>
                                <ellipse cx="52" cy="42" rx="2" ry="1.2" fill="#FFF9C4" transform="rotate(-10 52 42)"/>
                                <ellipse cx="68" cy="41" rx="2" ry="1.2" fill="#FFF9C4" transform="rotate(15 68 41)"/>
                                <!-- Lechuga ondulada -->
                                <path d="M 18 52 C 22 48, 26 56, 31 52 C 36 48, 40 56, 45 52 C 50 48, 55 56, 60 52 C 65 48, 70 56, 75 52 C 80 48, 85 56, 90 52 C 95 48, 99 55, 102 52 C 103 55, 99 59, 95 58 C 89 57, 85 62, 79 58 C 73 55, 68 61, 62 58 C 56 55, 51 61, 46 58 C 40 55, 36 61, 30 58 C 24 55, 19 58, 18 52 Z" fill="url(#lechugaGrad)"/>
                                <!-- Queso derretido -->
                                <path d="M 23 57 L 97 57 L 93 64 L 75 64 L 68 73 L 56 64 L 37 64 L 32 70 L 26 64 Z" fill="url(#quesoGrad)"/>
                                <!-- Carne jugosa a la parrilla -->
                                <rect x="20" y="63" width="80" height="15" rx="7.5" fill="url(#carneGrad)"/>
                                <!-- Marcas de parrilla -->
                                <path d="M 32 66 L 39 75 M 48 66 L 55 75 M 64 66 L 71 75 M 80 66 L 87 75" stroke="#2D1B15" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
                                <!-- Pan Inferior -->
                                <path d="M 24 79 C 24 77, 96 77, 96 79 C 96 82, 94 92, 85 95 C 75 97, 45 97, 35 95 C 26 92, 24 82, 24 79 Z" fill="url(#panBaseGrad)"/>
                                <ellipse cx="60" cy="94" rx="22" ry="2" fill="#BF360C" opacity="0.4"/>
                            </g>
                        </svg>
                    `,
                    texto: "Cargando comidas rápidas..."
                };

            case "inicio":
            default:
                return {
                    simboloHtml: `
                        <img
                            src="Imagenes/Pollo-Friss-Simbolo.png"
                            alt="Pollo Friss"
                            class="logo-carga"
                        >
                    `,
                    texto: "Cargando..."
                };
        }
    }

    /* =========================================
       4. INICIALIZAR PANTALLA DE CARGA
    ========================================= */
    let pantallaCarga = document.getElementById("pantallaCarga");
    let yaInicializado = false;

    function inicializarPantallaCarga() {
        if (yaInicializado) return;
        yaInicializado = true;

        inyectarEstilos();

        const seccion = detectarSeccion();
        const config = obtenerContenido(seccion);

        if (!pantallaCarga) {
            pantallaCarga = document.createElement("div");
            pantallaCarga.id = "pantallaCarga";
            document.body.prepend(pantallaCarga);
        }

        pantallaCarga.innerHTML = `
            <div class="carga-contenido">
                <div class="simbolo-carga-contenedor">
                    ${config.simboloHtml}
                </div>
                <div class="spinner-carga"></div>
                <p>${config.texto}</p>
            </div>
        `;

        // Ocultar una sola vez de forma suave
        setTimeout(function () {
            if (pantallaCarga) {
                pantallaCarga.classList.add("ocultar");
                setTimeout(function () {
                    if (pantallaCarga && pantallaCarga.classList.contains("ocultar")) {
                        pantallaCarga.style.display = "none";
                    }
                }, 500);
            }
        }, 700);
    }

    /* =========================================
       5. EJECUTAR AL CARGAR
    ========================================= */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", inicializarPantallaCarga);
    } else {
        inicializarPantallaCarga();
    }

    /* =========================================
       6. MANEJO DE CACHÉ DE NAVEGACIÓN (Bfcache)
       (Evita que se quede pegado si se usa atrás/adelante)
    ========================================= */
    window.addEventListener("pageshow", function (evento) {
        if (evento.persisted) {
            const p = document.getElementById("pantallaCarga");
            if (p) {
                p.classList.add("ocultar");
                p.style.display = "none";
            }
        }
    });

})();