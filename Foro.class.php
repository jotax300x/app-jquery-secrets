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
		foreach ($resultados as $key => $value) {
			$sMensaje = $value['mensaje'];
			$bGenero = $value['genero'];
			$bPicante = $value['erotico'];
			$Fecha = $value['fecha'];
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
			echo "<div class='$sSexo $sPicante'><p class='fecha'>'$Fecha'</p><br><p class='mensaje'>'$sMensaje'</p></div>";
		}
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