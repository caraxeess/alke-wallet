document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault(); //evita que la pagina se recargue

    const correo = document.getElementById('email').value; //captura el valor del correo
    const clave = document.getElementById('pass').value; //captura el valor de la clave

    const correoCorrecto = 'talentodigital@gmail.com';
    const passwordCorrecta = '123456';
    const error = document.getElementById('error');

    if (correo === correoCorrecto && clave === passwordCorrecta) { //valida que el correo y la clave sean correctas
        error.style.color = "green"
        error.textContent = "Inicio de sesión exitoso";
        setTimeout(() => { //espera 1.5 segundos
            window.location.href = "menu.html"; //redirige a la pagina de menu
        }, 1500);
    } else {
        error.style.color = "red"
        error.textContent = "Error: Credenciales incorrectas. Intenta nuevamente";
    }
});

//extrae los valores ingresados por el usuario y los valida contra credenciales predefinidas
//Proporciona feedback visual dinámico mediante mensajes de éxito o error