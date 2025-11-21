<?php
require_once 'config.php'; 

$mensaje_login_registro = "";
$usuario_logueado = isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    if (isset($_POST['login_attempt'])) {
        $correo = trim($_POST["correo"]);
        $contrasena = trim($_POST["contrasena"]);
        
        $sql = "SELECT id_usuario, nombre, contraseña FROM usuario WHERE correo = ?";
        if($stmt = mysqli_prepare($link, $sql)){
            mysqli_stmt_bind_param($stmt, "s", $param_correo);
            $param_correo = $correo;
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
                if(mysqli_stmt_num_rows($stmt) == 1){
                    mysqli_stmt_bind_result($stmt, $id, $nombre, $hashed_password);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($contrasena, $hashed_password)){ 
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id_usuario"] = $id;
                            $_SESSION["nombre"] = $nombre;
                            header("location: index.php"); 
                            exit; 
                        } else{
                            $mensaje_login_registro = "Contraseña no válida.";
                        }
                    }
                } else{
                    $mensaje_login_registro = "Correo no registrado.";
                }
            }
            mysqli_stmt_close($stmt);
        }
    } 
    
    elseif (isset($_POST['register_attempt'])) {
        $nombre = trim($_POST["nombre"]);
        $correo = trim($_POST["correo"]);
        $contrasena = trim($_POST["contrasena"]);
        $carrera = trim($_POST["carrera"]);
        
        $hashed_contrasena = password_hash($contrasena, PASSWORD_DEFAULT); 
        
        $sql_insert = "INSERT INTO usuario (nombre, correo, contraseña, carrera) VALUES (?, ?, ?, ?)";
        if($stmt_insert = mysqli_prepare($link, $sql_insert)){
            mysqli_stmt_bind_param($stmt_insert, "ssss", $param_nombre, $param_correo, $param_contrasena, $param_carrera);
            $param_nombre = $nombre;
            $param_correo = $correo;
            $param_contrasena = $hashed_contrasena;
            $param_carrera = $carrera;
            
            if(mysqli_stmt_execute($stmt_insert)){
                $mensaje_login_registro = "¡Registro exitoso! Ya puedes iniciar sesión.";
            } else{
                if(mysqli_errno($link) == 1062) { 
                    $mensaje_login_registro = "Error: El correo ya está registrado.";
                } else {
                    $mensaje_login_registro = "Error: No se pudo registrar el usuario. Inténtelo de nuevo.";
                }
            }
            mysqli_stmt_close($stmt_insert);
        }
    }

    elseif ($usuario_logueado && isset($_POST['texto_comentario'])) {
        $texto = trim($_POST['texto_comentario']);
        $calificacion = $_POST['calificacion'];
        $id_usuario = $_SESSION["id_usuario"];
        
        if (!empty($texto) && is_numeric($calificacion) && $calificacion >= 1 && $calificacion <= 5) {
            $sql = "INSERT INTO comentario (id_usuario, texto_comentario, calificacion) VALUES (?, ?, ?)";
            if($stmt = mysqli_prepare($link, $sql)){
                mysqli_stmt_bind_param($stmt, "isd", $param_id, $param_texto, $param_calif);
                
                $param_id = $id_usuario;
                $param_texto = $texto;
                $param_calif = $calificacion;
                
                if(mysqli_stmt_execute($stmt)){
                    header("location: index.php"); 
                    exit;
                }
                mysqli_stmt_close($stmt);
            }
        }
    }
}

$comentarios_html = "";
$sql = "SELECT c.texto_comentario, c.calificacion, DATE_FORMAT(c.fecha_de_publicacion, '%d-%m-%Y %H:%i') AS fecha, u.nombre, u.carrera 
        FROM comentario c 
        JOIN usuario u ON c.id_usuario = u.id_usuario 
        ORDER BY c.fecha_de_publicacion DESC";

if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_array($result)){
            $nombre_carrera = htmlspecialchars($row['nombre']) . 
                              (!empty($row['carrera']) ? ' (' . htmlspecialchars($row['carrera']) . ')' : '');
            
            $comentarios_html .= "
                <div class='comentario_item'>
                    <p><strong>{$nombre_carrera}</strong></p>
                    <p>Puntuación: <strong>" . htmlspecialchars($row['calificacion']) . " / 5</strong></p>
                    <p class='texto_comentario_cuerpo'>" . htmlspecialchars($row['texto_comentario']) . "</p>
                    <small>Publicado el: " . htmlspecialchars($row['fecha']) . "</small>
                </div>
            ";
        }
        mysqli_free_result($result);
    } else {
        $comentarios_html = "<p class='mensaje_vacio'>Aún no hay comentarios. ¡Sé el primero en opinar!</p>";
    }
} else {
    $comentarios_html = "<p class='mensaje_error'>ERROR: No se pudo cargar los comentarios.</p>";
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Ristorante Italiano</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="estilo.css" />
    <link rel="icon" type="image/x-icon" href="img/icon.ico">
</head>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ELGD6XYRCZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ELGD6XYRCZ');
</script>
        
<body>
    <?php if (!empty($mensaje_login_registro)): ?>
    <div id="alerta_global" class="mensaje_global">
        <?php echo $mensaje_login_registro; ?>
        <button onclick="document.getElementById('alerta_global').classList.add('mensaje_oculto')"
            aria-label="Cerrar alerta">✕</button>
    </div>
    <?php endif; ?>

    <main id="contenedor_principal">
        <header id="zona_carrusel">
            <div id="logo_carrusel">
                <img src="img/logo.png" alt="Logo" class="logo_imagen">
            </div>
            <div class="barra_superior_botones">
                <?php if ($usuario_logueado): ?>
                <span style="padding: 10px; color: #E8DFDE;">
                    Hola,
                    <?php echo htmlspecialchars($_SESSION["nombre"]); ?>
                </span>
                <button onclick="window.location.href='logout.php'">Cerrar Sesión</button>
                <?php else: ?>
                <button id="boton_registrarse">Registrarse</button>
                <button id="boton_iniciar_sesion">Iniciar sesión</button>
                <?php endif; ?>
                <button id="boton_ver_comentarios">Ver comentarios</button>
            </div>

            <div id="carrusel_contenedor">
                <button class="flecha carrusel_izquierda" data-dir="-1" aria-label="Anterior">&lt;</button>
                <div id="carrusel_pistas">

                    <article class="carrusel_elemento activo" data-index="0" aria-hidden="false">
                        <video class="video_carrusel" src="https://cdn.pixabay.com/video/2020/03/05/33256-396487978.mp4"
                            autoplay muted loop playsinline></video>
                        <div class="carrusel_contenido">
                            <h2 class="titulo_carrusel">A Tavola non s'invecchia mai.</h2>
                        </div>
                    </article>

                    <article class="carrusel_elemento" data-index="1" aria-hidden="true">
                        <video class="video_carrusel" src="https://cdn.pixabay.com/video/2024/05/01/210300_small.mp4"
                            autoplay muted loop playsinline></video>
                        <div class="carrusel_contenido">
                            <h2 class="titulo_carrusel">La Dolce Vita.</h2>
                        </div>
                    </article>

                    <article class="carrusel_elemento" data-index="2" aria-hidden="true">
                        <video class="video_carrusel" src="https://cdn.pixabay.com/video/2020/03/05/33257-396487989.mp4"
                            autoplay muted loop playsinline></video>
                        <div class="carrusel_contenido">
                            <h2 class="titulo_carrusel">Fatto con Amore.</h2>
                        </div>
                    </article>
                    <div id="vista_platillo" aria-hidden="true" class="oculto">
                        <div id="vista_platillo_contenido">
                        </div>
                    </div>
                </div>
                <button class="flecha carrusel_derecha" data-dir="1" aria-label="Siguiente">&gt;</button>
            </div>
        </header>

        <section id="zona_inferior">
            <div id="zona_inferior_fondo" class="fondo_neutro">
                <div class="fila_superior">

                    <div id="titulo_restaurante">
                        <div>
                            <h1 class="texto_restaurante">Ristorante Italiano</h1>
                            <p class="subtitulo_restaurante">Auténtica cocina italiana desde 1985</p>
                        </div>
                    </div>
                    <div class="fila_bloques">
                        <button class="bloque bloque_menu" data-color="verde" id="boton_menu" aria-pressed="false">
                            <span class="texto_bloque">Menú</span>
                        </button>
                        <button class="bloque bloque_contacto" data-color="gris" id="boton_contacto"
                            aria-pressed="false">
                            <span class="texto_bloque">Contacto</span>
                        </button>
                        <button class="bloque bloque_acercade" data-color="rojo" id="boton_acercade"
                            aria-pressed="false">
                            <span class="texto_bloque">Acerca de</span>
                        </button>
                    </div>
                </div>
            </div>
            <div id="panel_abierto" class="panel_oculto" aria-hidden="true">
                <button id="panel_cerrar" class="boton_cerrar_panel" aria-label="Cerrar sección">✕</button>
                <div id="panel_contenido">
                    <div id="contenido_menu" class="contenido_seccion oculto">
                        <p class="titulo_seccion">Menú - Platillos</p>
                        <div id="rejilla_platillos" class="rejilla_platillos">
                        </div>
                    </div>
                    <div id="contenido_contacto" class="contenido_seccion oculto">
                        <p class="titulo_seccion">Contacto</p>

                        <div class="info_contacto_contenedor">
                            <div class="info_contacto_detalles">
                                <p><strong>Dirección:</strong></p>
                                <p>Rancho El 24 No 3152 Pradera Dorada, Ciudad Juárez 32618 México</p>

                                <p><strong>Teléfono:</strong></p>
                                <p>+52 656 617 9516</p>

                                <p><strong>Correo Electrónico:</strong></p>
                                <p>abelinitalia@hotmail.com</p>

                                <p><strong>Estacionamiento:</strong></p>
                                <p>Disponible para clientes.</p>

                                <p><strong>Horarios:</strong></p>
                                <table class="tabla_horarios">
                                    <tbody>
                                        <tr>
                                            <th>Domingo</th>
                                            <td>Del 12:00 PM al 09:00 PM</td>
                                        </tr>
                                        <tr class="dia_cerrado">
                                            <th>Lunes</th>
                                            <td>Cerrado</td>
                                        </tr>
                                        <tr>
                                            <th>Martes</th>
                                            <td>Del 11:00 AM al 10:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Miércoles</th>
                                            <td>Del 11:00 AM al 10:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Jueves</th>
                                            <td>Del 11:00 AM al 10:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Viernes</th>
                                            <td>Del 12:00 PM al 11:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Sábado</th>
                                            <td>Del 12:00 PM al 11:00 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="info_contacto_mapa">
                                <iframe
                                    src="https://maps.google.com/maps?q=Rancho%20El%2024%20No%203152%20Pradera%20Dorada,%20Ciudad%20Juárez%2032618%20México&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                    width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
<div id="contenido_acercade" class="contenido_seccion oculto">
    <p class="titulo_seccion">Acerca de la Cocina Italiana</p>
    <div class="info_acercade_contenedor_corregido">
        <div class="columna_acercade imagen_programador">
            <p style="text-align: center; margin-bottom: 10px;">Ficha del proyecto</p>
            <img src="img/Multimedia.jpg" alt="Ficha del Programador" class="imagen_ficha_programador" onclick="window.location.href='http://soyiroid.atwebpages.com/index.html'">
        </div>
        
        <div class="columna_acercade texto_cocina">
            <h3>La esencia de Italia en la mesa</h3>
            <p>La cocina italiana se caracteriza por la sencillez, el uso de ingredientes frescos, de alta calidad y de temporada. Resalta los sabores naturales de los alimentos, a menudo utilizando pocos ingredientes por plato, y se basa en especialidades regionales que varían según la zona.</p>
            <p>Los ingredientes clave incluyen aceite de oliva, tomates, quesos, pastas frescas, verduras, hierbas y carnes o pescados.</p>
            <img src="img/Comida.jpg" alt="Comida" class="imagen_comida">
        </div>
    </div>
</div>
                </div>
            </div>
        </section>
    </main>
    <div id="overlay_popup" class="overlay"></div>

    <div id="popup_iniciar" class="popup">
        <button class="cerrar_popup" data-popup="popup_iniciar">✕</button>
        <h2>Iniciar sesión</h2>
        <form action="index.php" method="post">
            <input type="hidden" name="login_attempt" value="1">
            <label for="login_correo">Correo:</label>
            <input type="email" id="login_correo" name="correo" required>
            <label for="login_contraseña">Contraseña:</label>
            <input type="password" id="login_contraseña" name="contrasena" required>
            <button type="submit">Entrar</button>
        </form>
    </div>

    <div id="popup_registro" class="popup">
        <button class="cerrar_popup" data-popup="popup_registro">✕</button>
        <h2>Registrarse</h2>
        <form action="index.php" method="post">
            <input type="hidden" name="register_attempt" value="1">
            <label for="reg_nombre">Nombre:</label>
            <input type="text" id="reg_nombre" name="nombre" required>
            <label for="reg_correo">Correo:</label>
            <input type="email" id="reg_correo" name="correo" required>
            <label for="reg_contraseña">Contraseña:</label>
            <input type="password" id="reg_contraseña" name="contrasena" required>
            <label for="reg_carrera">Carrera (Opcional):</label>
            <input type="text" id="reg_carrera" name="carrera">
            <button type="submit">Registrarme</button>
        </form>
    </div>

    <div id="popup_comentarios" class="popup">
        <button class="cerrar_popup" data-popup="popup_comentarios">✕</button>
        <h2>Comentarios</h2>
        <?php if ($usuario_logueado): ?>
        <form action="index.php" method="post">
            <textarea name="texto_comentario" rows="4" required placeholder="Escribe tu comentario aquí..."
                maxlength="500"></textarea>
            <label for="calificacion">Calificación (1 a 5):</label>
            <input type="number" name="calificacion" min="1" max="5" step="0.5" required style="width: 100px;">
            <button type="submit">Publicar comentario</button>
        </form>
        <?php else: ?>
        <p
            style="text-align: center; color: #A63029; font-weight: bold; border: 2px dashed #A63029; padding: 10px; border-radius: 8px;">
            Debes iniciar sesión para publicar un comentario.
        </p>
        <?php endif; ?>

        <div id="lista_comentarios">
            <?php echo $comentarios_html; ?>
        </div>
    </div>

    <div id="asistente_virtual_flotante">
    <a href="https://studio.d-id.com/agents/share?id=v2_agt_yC3OBugJ&utm_source=copy&key=WjI5dloyeGxMVzloZFhSb01ud3hNVEUzTlRVMk9UazRORFEwT0RNd05qRXdOVEU2TVVKMk1rbExWWFJIUWxaeVVqZFJSa28yU1VFMA==" 
       target="_blank" 
       class="asistente_enlace_flotante">
        <video class="video_simulacion_flotante" width="100" height="100" autoplay loop muted playsinline>
            <source src="img/asistente_cuadrado.mp4" type="video/mp4">
        </video>
        <div class="tooltip_asistente">¡Click para asistencia!</div>
    </a>
</div>

    <script src="script.js"></script>
</body>

</html>