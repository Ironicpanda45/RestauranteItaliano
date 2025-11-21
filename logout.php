<?php
// Incluye config.php para asegurar que la sesión esté iniciada
require_once 'config.php';

// Limpia todas las variables de sesión
$_SESSION = array();

// Destruye la sesión
session_destroy();

// Redirige a la página principal
header("location: index.php");
exit;
?>