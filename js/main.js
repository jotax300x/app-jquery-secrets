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
		// $.get('consultar.php', function(data) {
		// 	$foro.html(data);
		// });
		$.ajax({
		    url: 'http://pixelmouse.es/trabajos/secrets/consultar.php',
		    dataType: 'jsonp',
        	contentType: "application/json; charset=utf-8",
		    type: 'GET',
		    crossDomain: true,
		    data: {
		    	//Enviar dato extra
		        //'usuario' : iUsuario
		    },
		    success: function (respuesta) {
				var sHTML = '';
				var sMensaje = '';
				var sGenero = ''; 
				var sErotico = '';
				var aMensajes = jQuery.makeArray(respuesta);
				for(var aColum in aMensajes) {
					sMensaje = aMensajes[aColum]['mensaje'];
					sGenero = aMensajes[aColum]['genero'];
					sErotico = aMensajes[aColum]['erotico'];
					sHTML = "<div class='cuadro " + sGenero + " " + 
					sErotico + "'>" + sMensaje + "</div>";
					$foro.append(sHTML);
				}
		    }, 
			error: function (jqXHR, textStatus, errorThrown) { 
				console.log(textStatus + ': ' + errorThrown.message); 
			}
		})
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
