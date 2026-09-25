/** Libreria de funciones de validacion y calculos en JavaScript */


/** 
1. Valida el formato de un correo electronico.
 @param {string} correo - El correo a validar.
 @returns {boolean} - Retorna true si el formato es correcto, false en caso contrario.
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@(gmail\.com|hotmail\.com|edu\.mx)$/;
    return regex.test(correo);
}


/**
2. Valida que un texto contenga solo letras (mayusculas, minusculas y vocales acentuadas).
@param {string} texto - El texto a evaluar.
@returns {boolean} - Retorna true si solo son letras.
 */
function soloLetras(texto) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(texto);
}


/**
 3. Valida la longitud de un numero o maxima longitud de texto
 @param {number|string} numero - El numero o texto a evaluar.
 @param {number} maxLongitud - El limite maximo de digitos o caracteres permitidos.
 @returns {boolean} - Retorna true si la longitud es menor o igual al maximo, false si lo excede.
 */
function validarLongitud(numero, maxLongitud) {
    let str = String(numero);
    return str.length <= maxLongitud;
}

/**Validar fecha de nacimiento */
function limitarFechaActual(idElemento) {
    const fechaActual = new Date().toISOString().split('T')[0];
    const input = document.getElementById(idElemento);
    if (input) {
        input.max = fechaActual;
    }
}

/**
 4. Calcula la edad en años enteros a partir de una fecha de nacimiento.
 @param {string|Date} fechaNacimiento - La fecha de nacimiento
 @returns {number} - Retorna la edad en numero entero.
 */
function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let m = hoy.getMonth() - nacimiento.getMonth();
    
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}


/**
 5. Valida si una persona es mayor de edad.
 @param {string|Date} fechaNacimiento - La fecha de nacimiento.
 @returns {boolean} - Retorna true si es mayor o igual a 18 años, false si es menor.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}


/** 
 6. Valida una contraseña segura. 
 Requisitos: Minimo 8 caracteres, al menos una mayuscula, una minuscula, un numero y un caracter especial.
 @param {string} password - La contraseña a evaluar.
 @returns {boolean} - Retorna true si cumple con todos los requisitos, false si no.
 */
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}



// Funciones adicionales de invencion propia

/**
 7. Valida que un numero telefonico tenga exactamente 10 digitos numericos.
 @param {string|number} telefono - El numero de telefono a verificar.
 @returns {boolean} - Retorna true si tiene exactamente 10 digitos, false en caso contrario.
 */
function validarTelefono(telefono) {
    const regex = /^\d{10}$/;
    return regex.test(String(telefono).trim());
}


/**
 8. Limpia un texto eliminando espacios duplicados intermedios y espacios extra en los extremos.
 @param {string} texto - El texto desorganizado con espacios de mas.
 @returns {string} - Retorna el texto limpio y formateado correctamente.
 */
function limpiarEspacios(texto) {
    if (typeof texto !== 'string') return '';
    // Reemplaza multiples espacios por uno solo y quita los extremos
    return texto.replace(/\s+/g, ' ').trim();
}