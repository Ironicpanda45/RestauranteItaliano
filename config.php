<?php
// Define las credenciales de la base de datos
define('DB_SERVER', 'fdb1034.awardspace.net');
define('DB_USERNAME', '4667275_votacion'); // Asume 'root' para XAMPP/WAMP
define('DB_PASSWORD', 'contrasena2004');     // Asume sin contraseña
define('DB_NAME', '4667275_votacion'); // Nombre de tu base de datos

// Conexión a la base de datos MySQL
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Verificar conexión
if($link === false){
    die("ERROR: No se pudo conectar a la DB. " . mysqli_connect_error());
}

// Iniciar sesión
session_start();
?>