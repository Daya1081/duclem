<?php

//Lamado a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$asunto = $_POST['asunto'];

//datos para el correo

$destinatario = "dayopecha2@gmail.com";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "asunto: $asunto";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $asunto);
header('Location:index.html#mensaje');



?>