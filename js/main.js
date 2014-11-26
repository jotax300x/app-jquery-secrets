$(document).ready(function() {
$radio = $('input[name=sexo]:checked');//Recoge de los inputs con name sexo el que esta checkeado
var iSexo = 0;
$mensaje = $('#mensaje');
$checkbox = $('input[name=picante]');
$picante = 0; //True si esta chekeado
$enviar = $('#enviar');
$foro = $('#foro');
$edad = $('input[name=edad]');


$edad.on('click', function() {
	$pican = $('.picante');
	$pican.slideToggle();
	console.log($pican.length)
});

function mostrarMensajes() {
	$.get('consultar.php', function(data) {
		$foro.html(data);
	});
}
mostrarMensajes();
setInterval('mostrarMensajes()', 50000000);	

function comprobarSexo() {
		iSexo = $radio.val();
		console.log(iSexo);
	}

function comprobarPicante() {
	if ($checkbox.is(':checked')) {
		$picante = 1;
	} else {
		$picante = 0;
	};	
}



$enviar.on('click', function() {
	if ($mensaje.val().length == 0) {
		alert('Tienes que escribir un mensaje')
	} else {
		comprobarSexo();
		comprobarPicante();
		$.post('insertar.php',
		 	{mensaje: $mensaje.val(),
		 	 sexo: iSexo,
		 	 picante: $picante
		 	},
		 	 function(data, textStatus, xhr) {
			/*optional stuff to do after success */
		});
		$mensaje.val('');
	};
	
});	
});
