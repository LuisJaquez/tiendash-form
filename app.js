let textarea = document.getElementById('texto').value,
	btnEnviar  = document.getElementById('enviar');
	error = document.getElementById('error');


function inicioApp() {
     // deshabilitar el envio
     btnEnviar.disabled = true;
}

function validarFormulario(e){
	error.innerHTML = '';
	validarTextarea(e);
	document.addEventListener('DOMContentLoaded', inicioApp);
}

function validarTextarea(e) {
	let textarea = document.getElementById('texto').value;
	e.preventDefault();

	if(textarea.length < 20){

		error.style.display = 'block';
		error.innerHTML += '<li>Ingrese una  más larga</li>';
		console.log('flata')
	} else {
		error.style.display = 'none';
			i.style.display = 'block';
	}
}

submit.addEventListener('submit', validarFormulario);
