// Asume que esta variable global contiene el JSON de platillos
// Se ha incluido al principio del script.
const datosPlatillos = {
    "platillos_italianos": [
        {
            "nombre": "Agnolotti",
            "descripcion_corta": "Pasta rellena de forma cuadrada, similar al ravioli, a menudo con carne.",
            "descripcion_larga": "Pequeños paquetitos de pasta fresca y tierna, típicamente rellenos de carne asada o verduras, servidos con salsas sencillas para realzar el sabor del relleno. Una delicia piamontesa.",
            "img": "https://www.196flavors.com/wp-content/uploads/2020/04/agnolotti-3-FP.jpeg"
        },
        {
            "nombre": "Albóndigas (Polpette)",
            "descripcion_corta": "Bolas de carne condimentada, cocidas en salsa de tomate o fritas.",
            "descripcion_larga": "Suculentas bolas de carne picada y sazonada, cocinadas lentamente en una rica salsa de tomate. Un clásico reconfortante que evoca la cocina casera italiana.",
            "img": "https://www.larecetafacil.com/wp-content/uploads/2022/01/polpette_albondigas_italianas.jpg"
        },
        {
            "nombre": "Arancini",
            "descripcion_corta": "Bolas de arroz rellenas, empanizadas y fritas (croquetas de arroz sicilianas).",
            "descripcion_larga": "La joya de la comida callejera siciliana: croquetas de arroz crujientes por fuera y cremosas por dentro, rellenas de ragú, mozzarella y guisantes. Un bocado explosivo de sabor y textura.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Arancini_002.jpg/1200px-Arancini_002.jpg"
        },
        {
            "nombre": "Bacalao a la Vizcaína",
            "descripcion_corta": "Bacalao en salsa de tomate, pimientos y cebolla, con influencias hispano-italianas.",
            "descripcion_larga": "Lomos de bacalao tierno, cocidos a fuego lento en una rica y colorida salsa a base de tomate maduro, pimientos y cebolla. Un plato robusto y lleno de sabor.",
            "img": "https://www.pequerecetas.com/wp-content/uploads/2011/06/bacalao-a-la-vizcaina-receta-tradicional-vasca.jpg"
        },
        {
            "nombre": "Berenjenas a la Parmesana",
            "descripcion_corta": "Capas de berenjena frita, salsa de tomate, mozzarella y queso Parmesano.",
            "descripcion_larga": "Capas suaves y cremosas de berenjenas, alternadas con salsa de tomate hecha en casa y mozzarella fresca, gratinadas con abundante Parmesano hasta obtener una corteza dorada y burbujeante. Clásico del sur de Italia.",
            "img": "https://i.ytimg.com/vi/Qo_6ZuL_LhA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDiBvsFiJa9ihWuZhN47XGUTOyOOQ"
        },
        {
            "nombre": "Bistec a la Florentina (Bistecca alla Fiorentina)",
            "descripcion_corta": "Gran chuletón de ternera con hueso, a la parrilla, tierno por dentro.",
            "descripcion_larga": "El emblemático chuletón toscano. Un corte grueso y jugoso de ternera, asado a la parrilla con leña o carbón, sellado perfectamente por fuera y sorprendentemente tierno y casi crudo por dentro (al punto). Sazón simple que realza la calidad de la carne.",
            "img": "https://saboraitaliamx.com/wp-content/uploads/2020/11/meat-steaks-with-rosemary-and-tomatoes-scaled.jpg"
        },
        {
            "nombre": "Bresaola",
            "descripcion_corta": "Finas lonchas de carne de res curada y seca, servida fría.",
            "descripcion_larga": "Finas y delicadas lonchas de carne de res curada, típicamente aderezadas con aceite de oliva, limón, pimienta y a menudo con rúcula y queso Parmesano. Un embutido ligero y sabroso del norte de Italia.",
            "img": "https://tekla-cbg.s3.eu-west-3.amazonaws.com/images/large/free_photo_of_plato_comida_mesa_raiz_de_remolacha_0f8ec3040f.jpeg"
        },
        {
            "nombre": "Bruschetta",
            "descripcion_corta": "Pan tostado con aceite de oliva, ajo y tomate fresco, albahaca.",
            "descripcion_larga": "Crujientes rebanadas de pan tostado, frotadas con ajo y cubiertas con una mezcla vibrante de tomate fresco, albahaca y aceite de oliva virgen extra. El aperitivo italiano por excelencia.",
            "img": "https://www.allrecipes.com/thmb/QSsjryxShEx1L6o0HLer1Nn4jwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/54165-balsamic-bruschetta-DDMFS-4x3-e2b55b5ca39b4c1783e524a2461634ea.jpg"
        },
        {
            "nombre": "Bucatini all'Amatriciana",
            "descripcion_corta": "Pasta larga con agujero, en salsa de tomate, guanciale (cachete de cerdo) y queso Pecorino.",
            "descripcion_larga": "Pasta bucatini (un espagueti grueso y hueco) envuelta en una salsa picante a base de tomate, trozos de guanciale crujiente y abundante queso Pecorino rallado. Un plato robusto y lleno de historia de Roma.",
            "img": "https://assets.bonappetit.com/photos/6631642a768e98647bcb9e34/1:1/w_3237,h_3237,c_limit/amatriciana_RECIPE_041624_0739_VOG_final.jpg"
        },
        {
            "nombre": "Carpaccio",
            "descripcion_corta": "Láminas muy finas de carne o pescado crudo, aderezadas con aceite y limón.",
            "descripcion_larga": "Delicadas y transparentes láminas de carne de res cruda de la mejor calidad (o a veces pescado), aderezadas con un toque de aceite de oliva, limón y, a menudo, virutas de Parmesano y rúcula fresca. Un plato ligero y elegante.",
            "img": "https://media.elgourmet.com/recetas/cover/5a06db40c87e54d9c8de05d8a9c6d8f6_3_3_photo.png"
        },
        {
            "nombre": "Cordero",
            "descripcion_corta": "Carne de cordero preparada al horno o guisada con hierbas aromáticas.",
            "descripcion_larga": "Trozos tiernos de cordero, asados a la perfección o cocinados a fuego lento con romero, ajo y vino. Un plato tradicional de Pascua, que destaca el sabor intenso de la carne.",
            "img": "https://cocinaconmarco.com/wp-content/uploads/2023/03/IMG_8168.webp"
        },
        {
            "nombre": "El Calzone",
            "descripcion_corta": "Masa de pizza doblada y sellada, rellena de queso, carne o verduras.",
            "descripcion_larga": "Una pizza doblada sobre sí misma, formando una media luna rellena de mozzarella, ricotta, jamón cocido o salami. Horneado hasta que la masa está hinchada y dorada, ofreciendo un relleno caliente y delicioso.",
            "img": "https://editorialtelevisa.brightspotcdn.com/ac/04/28b5c170467e9d25c03cfd9e26dc/calzone.jpg"
        },
        {
            "nombre": "Ensalada Caprese",
            "descripcion_corta": "Rodajas de tomate, mozzarella fresca y hojas de albahaca, con aceite de oliva.",
            "descripcion_larga": "La simplicidad de los colores de la bandera italiana: rodajas de tomate maduro y dulce, mozzarella de búfala fresca y cremosa, y hojas de albahaca aromática. Aderezada solo con aceite de oliva, es la esencia del verano.",
            "img": "https://i.blogs.es/2d572b/caprese/840_560.jpg"
        },
        {
            "nombre": "Espaguetis a la Boloñesa",
            "descripcion_corta": "Pasta espagueti con la clásica salsa ragú (carne picada y tomate).",
            "descripcion_larga": "Espaguetis al dente bañados en una rica y sustanciosa salsa ragú, cocinada lentamente con carne picada, verduras y tomate. Un plato universalmente amado por su sabor profundo y reconfortante.",
            "img": "https://imag.bonviveur.com/espaguetis-a-la-bolonesa.jpg"
        },
        {
            "nombre": "Espaguetis a la Carbonara",
            "descripcion_corta": "Pasta con yema de huevo, guanciale, queso Pecorino y pimienta negra.",
            "descripcion_larga": "La auténtica Carbonara: una emulsión perfecta de yemas de huevo y queso Pecorino Romano, que envuelve el espagueti al dente junto a crujientes trozos de guanciale. Sin nata. Sabor intenso y cremosidad inigualable.",
            "img": "https://recetasdecocina.elmundo.es/wp-content/uploads/2024/09/espaguetis-a-la-carbonara.jpg"
        },
        {
            "nombre": "Fajitas con Carne (o Ternera)",
            "descripcion_corta": "Tiras de carne salteadas con verduras, de origen tex-mex pero adaptado.",
            "descripcion_larga": "Tiras de ternera salteadas con pimientos y cebollas, servidas en tortillas. Un plato con influencia internacional, aunque no tradicionalmente italiano, disfrutado por su sabor especiado y presentación vibrante.",
            "img": "https://hips.hearstapps.com/hmg-prod/images/fajitas-carne-elle-gourmet-642aa7007459d.jpg"
        },
        {
            "nombre": "Farinata o Fainé",
            "descripcion_corta": "Tarta plana y delgada hecha con harina de garbanzo, horneada en horno de leña.",
            "descripcion_larga": "Una especie de crepe grande y muy delgado, hecho con harina de garbanzo, aceite de oliva y agua. Horneado hasta que los bordes están crujientes. Es un plato simple pero sabroso, típico de Liguria y Toscana.",
            "img": "https://www.giallozafferano.es/images/3-335/Farinata-de-garbanzos_1200x800.jpg"
        },
        {
            "nombre": "Focaccia",
            "descripcion_corta": "Pan plano italiano, horneado con aceite de oliva y sal marina gruesa.",
            "descripcion_larga": "Pan plano horneado, similar a la pizza, pero más esponjoso y enriquecido con aceite de oliva. Su textura aireada y su sabor salado la hacen perfecta para mojar en aceite o como acompañamiento.",
            "img": "https://images.ctfassets.net/0e6jqcgsrcye/5rZjjDlzxAPgUj2zPlWwI/bbd88685d9052a170cac462781ba4e4e/garlicandparmesanfocaccia_thumbnail.jpg"
        },
        {
            "nombre": "Focaccia Rellena (Frica)",
            "descripcion_corta": "Masa de focaccia o pan plano rellena, similar al calzone pero más plana.",
            "descripcion_larga": "Una masa de pan horneada y rellena, que puede variar desde queso y verduras hasta carne. Similar a la focaccia de queso pero con más variedad de rellenos.",
            "img": "https://images.immediate.co.uk/production/volatile/sites/54/2025/03/250320251742892707.jpeg"
        },
        {
            "nombre": "Grissini",
            "descripcion_corta": "Palitos de pan crujientes (Grissini)",
            "descripcion_larga": "Grissini: Finos y crujientes palitos de pan, típicos de Turín. Ideales para picar o acompañar embutidos y quesos.",
            "img": "https://i.ytimg.com/vi/RCG7i0imfy8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHUspzV2NZ9WqaJChv50MTeggo-A"
        },
        {
            "nombre": "La Piadina",
            "descripcion_corta": "Pan plano delgado de Romaña, relleno y enrollado como un wrap.",
            "descripcion_larga": "Pan plano sin levadura, cocido en una plancha caliente y luego relleno de quesos blandos (como Squacquerone), embutidos (Prosciutto) y rúcula. El 'sándwich' italiano por excelencia.",
            "img": "https://www.italia.it/content/dam/tdh/es/interests/emilia-romagna/casa-artusi/media/20210311143012-piadina.jpg"
        },
        {
            "nombre": "La Polenta",
            "descripcion_corta": "Harina de maíz cocida lentamente, servida blanda o frita/gratinada.",
            "descripcion_larga": "El alimento básico del norte de Italia. Harina de maíz cocida lentamente hasta obtener una papilla cremosa y densa, servida a menudo con salsas ricas de carne, quesos o setas. Se solidifica al enfriarse, pudiendo freírse.",
            "img": "https://mandolina.co/wp-content/uploads/2022/03/Polenta_OpenGraph-1200x900.jpg"
        },
        {
            "nombre": "Lasaña",
            "descripcion_corta": "Capas de pasta, salsa de carne ragú, bechamel y quesos gratinados.",
            "descripcion_larga": "El resultado de la paciencia: capas de pasta casera que abrazan una rica salsa boloñesa y una bechamel sedosa, gratinadas bajo una capa de queso dorado. El plato italiano más reconfortante.",
            "img": "https://newmansown.com/wp-content/uploads/2022/03/Homemade-lasagna-1200x675.png"
        },
        {
            "nombre": "Malfattini o Maltagliati",
            "descripcion_corta": "Pasta corta o trozos de pasta cortados irregularmente, ideal para sopas y guisos.",
            "descripcion_larga": "Trozos de pasta 'mal cortados' o de forma irregular, nacidos de los recortes de la pasta fresca. Perfectos para absorber los caldos de sopas densas o para ser servidos con salsas sencillas.",
            "img": "https://t3.ftcdn.net/jpg/01/41/61/70/360_F_141617004_hchMJBuw7uGuULGdWwH2fBSw0VU9doYA.jpg"
        },
        {
            "nombre": "Noquis o Gnocchi",
            "descripcion_corta": "Bolitas de masa de patata, suaves y ligeras, servidas con diversas salsas.",
            "descripcion_larga": "Suaves y delicadas bolitas de masa de patata, que se deshacen en la boca. Se sirven con salsas ligeras (como mantequilla y salvia) o ricas (como un ragú o pesto). Un plato muy versátil y reconfortante.",
            "img": "https://imag.bonviveur.com/noquis-o-gnocchi-de-patata.jpg"
        },
        {
            "nombre": "Ossobuco",
            "descripcion_corta": "Rodajas de jarrete de ternera con hueso, estofadas lentamente.",
            "descripcion_larga": "Rodajas gruesas de jarrete de ternera estofadas en vino blanco, caldo y verduras, hasta que la carne se desprende del hueso. Se sirve típicamente con Gremolata y acompañado de Risotto a la Milanesa.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/2/24/Osobuco_-_2010-10-20.jpg"
        },
        {
            "nombre": "Pan Genovés (Focaccia Genovese)",
            "descripcion_corta": "Pan plano de Génova, aceitoso y con hoyuelos profundos, muy sabroso.",
            "descripcion_larga": "Una versión de la Focaccia con una textura muy suave, hoyuelos profundos y un sabor salado pronunciado. Se utiliza mucho aceite de oliva para darle su sabor y suavidad característicos.",
            "img": "https://www.giallozafferano.es/images/2-294/Focaccia-f-gassa-a-la-genovesa_1200x800.jpg"
        },
        {
            "nombre": "Pizza",
            "descripcion_corta": "Masa plana horneada con tomate, mozzarella y aderezos.",
            "descripcion_larga": "La base de la cocina napolitana: masa fina y elástica con bordes hinchados y crujientes, cubierta con salsa de tomate de calidad, mozzarella fresca y horneada rápidamente a alta temperatura. La perfección en la sencillez.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg/1200px-Eataly_Las_Vegas_-_Feb_2019_-_Sarah_Stierch_12.jpg"
        },
        {
            "nombre": "Pizza de Pepperoni",
            "descripcion_corta": "Pizza con rodajas de salami picante, un clásico italoamericano.",
            "descripcion_larga": "Una adaptación popular de la pizza con el toque picante y graso del pepperoni (un tipo de salami seco y especiado). El contraste del queso fundido y la carne picante es irresistible.",
            "img": "https://www.pequerecetas.com/wp-content/uploads/2020/09/pizza-pepperoni-receta.jpg"
        },
        {
            "nombre": "Porchetta",
            "descripcion_corta": "Cerdo deshuesado y enrollado, asado lentamente con hierbas aromáticas.",
            "descripcion_larga": "Un cerdo entero deshuesado, relleno de hierbas aromáticas (romero, hinojo, ajo), enrollado y asado lentamente hasta que la piel queda increíblemente crujiente y la carne jugosa. Se sirve en rebanadas gruesas o en pan.",
            "img": "https://media-cdn2.greatbritishchefs.com/media/lxsonltf/img74784.whqc_768x512q90.jpg"
        }
    ]
};


document.addEventListener('DOMContentLoaded', () => {

    // =======================================================
    // I. LÓGICA DEL CARRUSEL
    // =======================================================
    const elementos = Array.from(document.querySelectorAll('.carrusel_elemento'));
    const izquierdo = document.querySelector('.carrusel_izquierda');
    const derecho = document.querySelector('.carrusel_derecha');
    let indice_actual = 0;
    const tiempo_auto = 6000;
    let timer_carousel;

    /** Muestra el slide basado en el nuevo índice */
    function mostrar_indice(nuevo) {
        elementos.forEach(el => {
            el.classList.remove('activo');
            el.setAttribute('aria-hidden', 'true');
        });
        const el = elementos[nuevo];
        el.classList.add('activo');
        el.setAttribute('aria-hidden', 'false');
        indice_actual = nuevo;
    }

    /** Mueve el carrusel una posición hacia adelante o atrás */
    function siguiente(delta = 1) {
        let prox = (indice_actual + delta + elementos.length) % elementos.length;
        mostrar_indice(prox);
    }

    izquierdo.addEventListener('click', () => {
        siguiente(-1);
        reiniciar_timer();
    });
    derecho.addEventListener('click', () => {
        siguiente(1);
        reiniciar_timer();
    });

    /** Reinicia el temporizador para el avance automático */
    function reiniciar_timer() {
        clearInterval(timer_carousel);
        timer_carousel = setInterval(() => siguiente(1), tiempo_auto);
    }
    reiniciar_timer();

    // =======================================================
    // II. LÓGICA DE PANELES INFERIORES
    // =======================================================
    const botones_bloque = document.querySelectorAll('.bloque');
    const zona_inferior_fondo = document.getElementById('zona_inferior_fondo');
    const panel_abierto = document.getElementById('panel_abierto');
    const panel_cerrar = document.getElementById('panel_cerrar');

    const contenido_menu = document.getElementById('contenido_menu');
    const contenido_contacto = document.getElementById('contenido_contacto');
    const contenido_acercade = document.getElementById('contenido_acercade');
    const zona_carrusel = document.getElementById('zona_carrusel');
    const zona_inferior = document.getElementById('zona_inferior');
    const fila_bloques = document.querySelector(".fila_bloques");

    const mapa_color = {
        verde: 'panel_verde',
        gris: 'panel_gris',
        rojo: 'panel_rojo'
    };

    botones_bloque.forEach(boton => {
        boton.addEventListener('click', () => {
            // No activar el bloque si es el de restaurante (si existiera)
            if (boton.id === 'boton_restaurante') return;

            // Desactivar todos los bloques y activar el actual
            botones_bloque.forEach(b => b.classList.remove('activo'));
            boton.classList.add('activo');

            const tipo = boton.dataset.color;

            // Limpiar clases de color y aplicar la nueva al panel
            panel_abierto.classList.remove('panel_verde', 'panel_rojo', 'panel_gris');
            if (mapa_color[tipo]) panel_abierto.classList.add(mapa_color[tipo]);

            // Mostrar el panel
            panel_abierto.classList.remove('panel_oculto');
            panel_abierto.classList.add('panel_mostrado');
            panel_abierto.setAttribute('aria-hidden', 'false');
            panel_abierto.style.height = '50%';
            zona_carrusel.style.height = '40%';
            zona_inferior.style.height = '10%';


            // Ocultar todos los contenidos y mostrar solo el que corresponde
            [contenido_menu, contenido_contacto, contenido_acercade].forEach(c => c.classList.add('oculto'));

            if (boton.id === 'boton_menu') {
                contenido_menu.classList.remove('oculto');
            } else if (boton.id === 'boton_contacto') {
                contenido_contacto.classList.remove('oculto');
            } else if (boton.id === 'boton_acercade') {
                contenido_acercade.classList.remove('oculto');
            }

            // Ajustar color de texto para contraste en el fondo_neutro (solo si es necesario)
            if (tipo === 'verde' || tipo === 'rojo') {
                zona_inferior_fondo.style.color = 'white';
            } else {
                zona_inferior_fondo.style.color = ''; // Volver al color por defecto (negro)
            }
        });
    });

    panel_cerrar.addEventListener('click', () => {
        panel_abierto.classList.remove('panel_mostrado');
        panel_abierto.setAttribute('aria-hidden', 'true');
        
        // Usar transitionend para asegurar que la clase 'panel_oculto' se añada DESPUÉS de la transición
        panel_abierto.addEventListener('transitionend', function handler() {
            panel_abierto.classList.add('panel_oculto');
            panel_abierto.removeEventListener('transitionend', handler);
        });

        // Limpiar estilos y clases de activo
        botones_bloque.forEach(b => b.classList.remove('activo'));
        zona_inferior_fondo.style.color = '';
        panel_abierto.style.height = '0%';
        zona_carrusel.style.height = '90%';
        zona_inferior.style.height = '10%';
    });

    // =======================================================
    // III. GENERACIÓN DE MENÚ Y VISTA DE PLATILLO (HOVER)
    // =======================================================
    const rejilla_platillos = document.getElementById('rejilla_platillos');

    // 1. Generar los elementos del menú (rejilla)
    if (datosPlatillos && datosPlatillos.platillos_italianos) {
        datosPlatillos.platillos_italianos.forEach(platillo => {
            const articulo = document.createElement('div');
            articulo.className = 'platillo';

            const img_src = platillo.img;

            articulo.innerHTML = `
             <img src="${img_src}" alt="${platillo.nombre}">
             <span class="texto_bloque" style="font-size: 14px; padding: 4px; line-height: 1;">${platillo.nombre}</span>
            `;
            // Almacenar datos en data-atributos para la vista de hover
            articulo.dataset.nombre = platillo.nombre;
            articulo.dataset.descripcion = platillo.descripcion_larga;
            articulo.dataset.imagen = img_src;

            rejilla_platillos.appendChild(articulo);
        });
    }

    const vista_platillo = document.getElementById('vista_platillo');
    const vista_platillo_contenido = document.getElementById('vista_platillo_contenido');

    /** Muestra la vista detallada del platillo en el carrusel */
    function mostrar_vista_platillo(datos) {
        vista_platillo_contenido.innerHTML = `
         <img src="${datos.imagen}" alt="${datos.nombre}">
         <div class="descripcion_platillo">
           <h3 style="margin:0 0 8px 0">${datos.nombre}</h3>
           <p style="margin:0">${datos.descripcion}</p>
         </div>
        `;
        // Ocultar los elementos del carrusel para que se vea el detalle
        elementos.forEach(el => el.style.opacity = '0');
        vista_platillo.classList.add('mostrando');
        vista_platillo.setAttribute('aria-hidden', 'false');
    }

    /** Oculta la vista detallada y restaura el carrusel */
    function ocultar_vista_platillo() {
        vista_platillo.classList.remove('mostrando');
        vista_platillo.setAttribute('aria-hidden', 'true');
        // Restaurar la opacidad del carrusel
        elementos.forEach(el => el.style.opacity = '');
    }

    // 2. Asignar eventos de mouse a los platillos para la vista detallada
    document.querySelectorAll('.platillo').forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const datos = {
                nombre: el.dataset.nombre,
                descripcion: el.dataset.descripcion,
                imagen: el.dataset.imagen
            };
            mostrar_vista_platillo(datos);
        });
        el.addEventListener('mouseleave', (e) => {
            ocultar_vista_platillo();
        });
    });


    // =======================================================
    // IV. LÓGICA DE POPUPS (LOGIN/REGISTRO/COMENTARIOS)
    // =======================================================
    const overlay = document.getElementById('overlay_popup');
    // Si los elementos no existen (por ejemplo, si el usuario ya está logueado), se establece como null.
    const botonIniciar = document.getElementById('boton_iniciar_sesion');
    const botonRegistro = document.getElementById('boton_registrarse');
    const botonComentarios = document.getElementById('boton_ver_comentarios');
    
    const popupIniciar = document.getElementById('popup_iniciar');
    const popupRegistro = document.getElementById('popup_registro');
    const popupComentarios = document.getElementById('popup_comentarios');

    /** Abre un popup específico y activa el overlay */
    function abrirPopup(popup) {
        if (!popup) return; // Asegurar que el elemento existe
        overlay.classList.add('activo');
        popup.classList.add('activo');
    }

    /** Cierra todos los popups activos y el overlay */
    function cerrarPopups() {
        // Cierra los popups activos con la clase 'activo'
        document.querySelectorAll('.popup.activo').forEach(p => p.classList.remove('activo'));
        
        // Damos un pequeño retraso para que la transición del popup se vea antes de ocultar el overlay
        setTimeout(() => {
             overlay.classList.remove('activo');
        }, 300);
    }

    // Asignar eventos de clic a los botones superiores
    if(botonIniciar) botonIniciar.addEventListener('click', () => abrirPopup(popupIniciar));
    if(botonRegistro) botonRegistro.addEventListener('click', () => abrirPopup(popupRegistro));
    if(botonComentarios) botonComentarios.addEventListener('click', () => abrirPopup(popupComentarios));


    // Asignar eventos de cierre
    overlay.addEventListener('click', cerrarPopups);
    document.querySelectorAll('.cerrar_popup').forEach(btn => btn.addEventListener('click', cerrarPopups));
    
    // Si existe un mensaje de PHP (login/registro), cerramos los popups al cargar para que el mensaje se vea.
    // Esto se maneja en el <script> inline de index.php, pero por si acaso.
});