$(document).ready(function() {
	$radio = $('input[name=genero]');//Recoge de los inputs con name sexo el que esta checkeado
	var iSexo = 0;
	$mensaje = $('#mensaje');
	$checkbox = $('input[name=erotico]');
	$picante = 0; //True si esta chekeado
	$enviar = $('#enviar');
	$foro = $('#foro');
	$edad = $('input[name=edad]');

	/**
	 * Muestra los mensajes picantes si eres mayor de edad
	 */
	$edad.on('click', function() {
		$pican = $('.picante');
		$pican.slideToggle();
	});
	/**
	 * Metodo que muestra los mensajes
	 * @return {[type]} [description]
	 */
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
		    	$foro.html('');
				var sHTML = '';
				var sMensaje = '';
				var sGenero = ''; 
				var sErotico = '';
				//jQuery.makeArray convierte el json en un array
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
	
	setInterval(mostrarMensajes(), 500);
	/**
	 * Obtiene el genero del que escribe el mensaje
	 */
	$radio.click(function() {
	    iSexo = $('input[name=genero]:checked:first').val();
	});
	/**
	 * Comprueba si el mensaje es picante o no
	 */
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
			$.ajax({
			    url: 'http://pixelmouse.es/trabajos/secrets/insertar.php',
			    dataType: 'jsonp',
	        	contentType: "application/json; charset=utf-8",
			    type: 'GET',
			    crossDomain: true,
			    data: {
			    	mensaje: $mensaje.val(),
			 	 sexo: iSexo,
			 	 picante: $picante
			 	
			    },
			    success: function (respuesta) {
					mostrarMensajes();
			    }, 
				error: function (jqXHR, textStatus, errorThrown) { 
					console.log(textStatus + ': ' + errorThrown.message); 
					mostrarMensajes();
			}
		})
			$mensaje.val('');
		};
		
	});	
});
