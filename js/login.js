// Capturamos los elementos del html
        const btnLogin = document.getElementById('btn-login');
        const inputCorreo = document.getElementById('correo');
        const inputPassword = document.getElementById('password');

        const errorCorreo = document.getElementById('error-correo');
        const errorPassword = document.getElementById('error-password');
        const exitoMsg = document.getElementById('exito-msg');

        // Escuchamos el evento click del botón
        btnLogin.addEventListener('click', function() {
            let correo = inputCorreo.value.trim();
            let password = inputPassword.value;

            let esValido = true;

            // 1. Validar el correo usando tu función de utileria.js
            if (!validarCorreo(correo)) {
                document.getElementById('error-correo').style.display = 'block';
                inputCorreo.classList.add('input-error'); // llama a una funcion pra poner el borde rojo
                esValido = false;
            } else {
                document.getElementById('error-correo').style.display = 'none';
                inputCorreo.classList.remove('input-error');
            }
            
            // Validación de la contraseña al estilo del index
            if (!validarPassword(password)) {
                 document.getElementById('error-password').style.display = 'block';
                 inputCorreo.classList.add('input-error');
                 esValido = false;
                } else {
                     document.getElementById('error-password').style.display = 'none';
                     inputCorreo.classList.remove('input-error');
                    }


    // Credenciales de prueba fijas 
    const correoPermitido = "mchay6825@gmail.com";
    const passwordPermitida = "Password123$";
    //  Comparamos con las credenciales
    if (esValido) {
        if (correo === correoPermitido && password === passwordPermitida) {
            // ¡Coinciden! Cambiamos bordes a verde y mostramos el MODAL
            inputCorreo.style.borderColor = "#28a745";
            inputPassword.style.borderColor = "#28a745";

            modalLogin.style.display = 'flex'; // Abre la ventana modal

        } else {
            // Formato válido pero credenciales incorrectas
            const errorGeneral = document.getElementById('error-general');
            errorGeneral.style.display = "block";
        }
    }
});