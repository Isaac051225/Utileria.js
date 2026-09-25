# Utileria JS

**Autor:** Isaac Emmanuel Diaz Mtz

**Materia:** Programación web

## ¿Qué problema resuelve?
Hacer validaciones a mano en cada página web es pesado y repetitivo. Cada vez que creamos un formulario, un login o un modal, tenemos que escribir la misma lógica para revisar si un correo es válido, si una contraseña cumple con los requisitos de seguridad o validar un telefono, etc...
**Utileria JS** soluciona esto agrupando funciones ya probadas en una sola librería, permitiéndo reutilizar el código de forma limpia y eficiente sin tener que programar todo desde cero.

## Instalación
Para utilizar la librería en cualquier archivo HTML de tu proyecto, simplemente descargar el archivo utilieria.js y agregalo mediante una etiqueta de script.
<script src="js/utileria.js"></script>

## Uso con ejemplos de código
### 1. Validación de Correo
```javascript
// Ejemplo de uso de la función validarCorreo
const correoInput = "ejemplo@correo.com";
if (validarCorreo(correoInput)) {
    console.log("El correo ingresado es válido.");
} else {
    console.log("Correo inválido.");
}

2. Validación de Contraseña Segura
JavaScript
let password = "Password*123";
if (validarPassword(password)) {
    console.log("La contraseña cumple con los requisitos de seguridad");
}

3. Validación de Teléfono (Función Personalizada)
JavaScript
let telefono = "5512345678";
if (validarTelefono(telefono)) {
    console.log("El teléfono es válido (10 dígitos)");
}

4. Cálculo de Edad por Fecha de Nacimiento
JavaScript
let fechaNacimiento = "2000-05-15";
let edad = calcularEdad(fechaNacimiento);
console.log("La edad calculada es: " + edad + " años");
