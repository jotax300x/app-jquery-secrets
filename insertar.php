<?php 

require_once 'Foro.class.php';

$sMensaje = trim($_POST['mensaje']);
$bSexo = trim($_POST['sexo']);
$bPicante = trim($_POST['picante']);

$miForo = new Foro();
$miForo->guardarMensaje($sMensaje, $bSexo, $bPicante);

 ?>