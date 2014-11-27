<?php 

class Foro {
	private $miDB = null;

	function __construct() {
		require_once 'BD.class.php';
		$this->miDB = new DB();
	}

	public function mostrarMensajes() {
		$sSQL = "SELECT * FROM erotic_bd ORDER BY fecha DESC";
		$resultados = $this->miDB->obtenerResultado($sSQL);
		$aDatos = array();
		$iCont = 0;
		foreach ($resultados as $key => $value) {

			//Version MJ
			// $sMensaje = $value['mensaje'];
			// $bGenero = $value['genero'];
			// $bPicante = $value['erotico'];
			// $Fecha = $value['fecha'];
			// $sSexo;
			// $aDatos;
			// $aMensaje;
			// array_push($aDatos, $sMensaje, $bGenero, $bPicante, $Fecha);
			// array_push($aMensaje, $aDatos);
			// $sPicante;
			// if ($bGenero == 1) {
			// 	$sSexo = 'hombre';
			// } else {
			// 	$sSexo = 'mujer';
			// };
			// if ($bPicante == 0) {
			// 	$sPicante = '';
			// } else {
			// 	$sPicante = 'picante';
			// };
			// echo "<div class='cuadro $sSexo $sPicante'>'$sMensaje'</div>";


			//Version Andros
			$sMensaje = $value['mensaje'];
			$bGenero = $value['genero'];
			$bPicante = $value['erotico'];
			$sSexo;
			$sPicante;
			if ($bGenero == 1) {
				$sSexo = 'hombre';
			} else {
				$sSexo = 'mujer';
			};
			if ($bPicante == 0) {
				$sPicante = '';
			} else {
				$sPicante = 'picante';
			};
			
			$aDatos[$iCont]['mensaje'] = $sMensaje;
			$aDatos[$iCont]['genero'] = $sSexo;
			$aDatos[$iCont]['picante'] = $sPicante;
			$iCont++;
		}
		//Esto es para indicar el tipo de datos que esta llegando.
		header('Content-Type: application/json');
		//Envio los datos de forma que los pueda leer jquery con la funcion 'jasonp'
    	echo $_GET['callback'] .'(' .json_encode($aDatos) . ')';
	}

	/**
	 * Metodo que guarda los mensajes dentro de la base de datos
	 * @param  string $insMensaje Mensaje
	 * @param  boolean $inbSexo    1 Hombre 0 Mujer
	 * @param  boolean $inbPicante 1 para mayores de 18 años
	 */
	public function guardarMensaje($insMensaje, $inbSexo, $inbPicante) {
		$sSQL = "INSERT INTO erotic_bd (mensaje, genero, erotico, fecha) VALUES  ('" . $insMensaje . "','" . $inbSexo . "','" . $inbPicante . "', now())";
		$this->miDB->ejecutarQuery($sSQL);
	}
}





 ?>