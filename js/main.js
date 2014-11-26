$(document).ready(function() {
	$radio = $('input[name=genero]');//Recoge de los inputs con name sexo el que esta checkeado
	var iSexo = 0;
	$mensaje = $('#mensaje');
	$checkbox = $('input[name=erotico]');
	$picante = 0; //True si esta chekeado
	$enviar = $('#enviar');
	$foro = $('#foro');
	$edad = $('input[name=edad]');


	$edad.on('click', function() {
		$pican = $('.picante');
		$pican.slideToggle();
	});

	function mostrarMensajes() {
		$.get('consultar.php', function(data) {
			$foro.html(data);
		});
	}
	mostrarMensajes()
	

$radio.click(function() {
    iSexo = $('input[name=genero]:checked:first').val();
});

	function comprobarPicante() {
		if ($checkbox.is(':checked')) {
			$picante = 1;
		} else {
			$picante = 0;
		};	
	}



	$enviar.on('click', function() {
		console.log('funcio')
		if ($mensaje.val().length == 0) {
			alert('Tienes que escribir un mensaje')
		} else {
			comprobarPicante();
			$.post('insertar.php',
			 	{mensaje: $mensaje.val(),
			 	 sexo: iSexo,
			 	 picante: $picante
			 	},
			 	 function(data, textStatus, xhr) {
				mostrarMensajes();
			});
			$mensaje.val('');
		};
		
	});	
});
