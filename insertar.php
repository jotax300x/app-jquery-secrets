<?php 

require_once 'Foro.class.php';

$sMensaje = trim($_GET['mensaje']);
$bSexo = trim($_GET['sexo']);
$bPicante = trim($_GET['picante']);

$miForo = new Foro();
$miForo->guardarMensaje($sMensaje, $bSexo, $bPicante);


$aArray = array();
header('Content-Type: application/json');
//Envio los datos de forma que los pueda leer jquery con la funcion 'jasonp'
echo $_GET['callback'] .'(' .json_encode($aArray) . ')';

 ?>