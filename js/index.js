// Lógica de JavaScript para el index.html
const btnProcesar = document.getElementById('btn-probar-todo');
const modal = document.getElementById('miModal');
const textoReporte = document.getElementById('texto-reporte');
const btnCerrar = document.getElementById('btn-cerrar');

btnProcesar.addEventListener('click', function() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value.trim();
    let telefono = document.getElementById('telefono').value;
    let codigo = document.getElementById('codigo').value;
    let password = document.getElementById('password').value;
    let fechaNac = document.getElementById('fechaNac').value;
    let hoy = new Date().toISOString().split('T')[0];

    let todoValido = true;

    // 1. soloLetras
    if (!soloLetras(nombre) || nombre.trim() === "") {
        document.getElementById('error-nombre').style.display = 'block';
        todoValido = false;
    } else { document.getElementById('error-nombre').style.display = 'none'; }

    // 2. validarCorreo
    if (!validarCorreo(correo)) {
        document.getElementById('error-correo').style.display = 'block';
        todoValido = false;
    } else { document.getElementById('error-correo').style.display = 'none'; }

    // 3. validarTelefono 
    if (!validarTelefono(telefono)) {
        document.getElementById('error-telefono').style.display = 'block';
        todoValido = false;
    } else { document.getElementById('error-telefono').style.display = 'none'; }

    // 4. validarLongitud (Máximo 5 caracteres)
    if (!validarLongitud(codigo, 5) || codigo.trim() === "") {
        document.getElementById('error-codigo').style.display = 'block';
        todoValido = false;
    } else { document.getElementById('error-codigo').style.display = 'none'; }

    // 5. validarPassword
    if (!validarPassword(password)) {
        document.getElementById('error-password').style.display = 'block';
        todoValido = false;
    } else { document.getElementById('error-password').style.display = 'none'; }

    // 6. Valirdar fecha de nacimiento
    limitarFechaActual('fechaNac');
    // Si la fecha seleccionada es mayor a hoy (es del futuro)
    if (fechaNac > hoy) {
        document.getElementById('error-fecha').style.display = 'block';
        todoValido = false;
    } else { document.getElementById('error-fecha').style.display = 'none';
        }


    // Si pasa todas las validaciones, mostramos el reporte completo en el Modal
    if (todoValido) {
        let nombreLimpio = limpiarEspacios(nombre);
        let edad = calcularEdad(fechaNac);
        let mayor = esMayorDeEdad(fechaNac);
        let estatusEdad = mayor ? "SI (>= 18)" : "NO (< 18)";

        textoReporte.innerHTML = `
            <b>¡Todas las funciones pasaron con éxito!</b><br><br>
            • <b>Nombre:</b> ${nombreLimpio}<br>
            • <b>Correo válido:</b> Sí<br>
            • <b>Teléfono válido:</b> ${telefono}<br>
            • <b>Código postal:</b> Aprobado<br>
            • <b>Contraseña segura:</b> Aprobada<br>
            • <b>Edad calculada:</b> ${edad} años<br>
            • <b>Mayor de edad:</b> ${estatusEdad}
        `;

        modal.style.display = 'flex';
    }
});

btnCerrar.addEventListener('click', function() {
    modal.style.display = 'none';
    window.location.href = "login.html"; // nos dirige al login al hacer clic
});