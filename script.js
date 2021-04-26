function onLoadPage() {
	alert('Hola, bienvenido, nos da gusto que estes aquí');

	var nombreUsuario = prompt('Por favor escribe tu nombre: ');

	document.querySelector('.text-change').innerHTML =
		'Bienvenido al Proyecto Transversal ' + '<strong>' + nombreUsuario + '</strong>';
}

function validate() {
	var name = document.querySelector('.name').value;
	var fathersurname = document.querySelector('.fathersurname').value;
	var mothersurname = document.querySelector('.mothersurname').value;
	var phone = document.querySelector('.phone').value;
	var address = document.querySelector('.address').value;
	var email = document.querySelector('.correo').value;

    if(name == "") {
        alert("El campo de nombre esta vacío.");
    } else if(fathersurname == "") {
        alert("El campo de apellido paterno esta vacío.");
    } else if(mothersurname == "") {
        alert("El campo de apellido materno esta vacío.");
    } else if(phone == "") {
        alert("El campo de teléfono esta vacío.");
    } else if(address == "") {
        alert("El campo de dirección esta vacío.");
    } else if(email == "") {
        alert("El campo de correo esta vacío.");
    } else {
        alert("Su registro fue exitoso, agradecemos que te hayas registrado");
    }
}

function JS() {
    
    var alertMessage = confirm("¿Deseás aprender más sobre Javascript?");

    if(alertMessage == true) {
        location.href ="./javascript.html";
    } else {
        alert("Puedes Ver esta informacion en otro momento.");
    }

}