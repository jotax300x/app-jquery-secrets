<!DOCTYPE html>
<html lang="Es es">
<head>
	<meta charset="UTF-8">
	<title>Actividad</title>
	<link rel="stylesheet" href="css/main.css">
	<script src="js/jquery-2.1.1.min.js"></script>
</head>
<body>
	<section>
		<h1>Erotic Foro</h1>
		<h4>Seleccione su genero:</h4>
		<label for="hombre">Hombre</label>
		<input type="radio" name="sexo" class="sexo" id="hombre" value="1" checked>
		<label for="mujer">Mujer</label>
		<input type="radio" name="sexo" class="sexo" id="mujer" value="0"><br>
		<h4>Escriba su mensaje:</h4>
		<textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea><br>
		<h4 id="checkbox">Si su mensaje es xXx marque la casilla</h4>
		<input type="checkbox" name="picante" id="picante" value="1"><br>
		<button id="enviar">Enviar</button>	
	</section>
		<nav>
			<h1>Mensajes</h1>
			<h4>Soy mayor de edad</h4>
			<input type="checkbox" name="edad" id="edad"><br>			
		</nav>
		

	<div id="foro">

	</div>
	
	<script src="js/main.js"></script>
</body>
</html>	