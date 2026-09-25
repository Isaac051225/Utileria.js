# Utileria JS

**Autor:** Isaac Emmanuel Diaz Mtz

**Materia:** Programación web

## ¿Qué problema resuelve?
Hacer validaciones a mano en cada página web es pesado y repetitivo. Cada vez que creamos un formulario, un login o un modal, tenemos que escribir la misma lógica para revisar si un correo es válido, si una contraseña cumple con los requisitos de seguridad o validar un telefono, etc...
**Utileria JS** soluciona esto agrupando funciones ya probadas en una sola librería, permitiéndo reutilizar el código de forma limpia y eficiente sin tener que programar todo desde cero.

## Instalación
Para utilizar la librería en cualquier archivo HTML de tu proyecto, simplemente descargar el archivo utilieria.js y agregalo mediante una etiqueta de script.
```javascript
<script src="js/utileria.js"></script>
```

## Uso con ejemplos de código
### 1. ValidarCorreo(correo)
Valida el formato de un correo electrónico.
```javascript
console.log(validarCorreo("usuario@gmail.com")); // true
console.log(validarCorreo("usuario@hotmail"));    // false
```

### 2.SoloLetras(texto)
Valida que un texto contenga solo letras y acentos.
```javascript
console.log(soloLetras("Isaac Emmanuel")); // true
console.log(soloLetras("Isaac123"));       // false
```

### 3. ValirdarLongitud(numero, maxLongitud)
Valida la longitud máxima permitida.
```javascript
console.log(validarLongitud("12345", 5));  // true
console.log(validarLongitud("123456", 5)); // false
```

### 4. ValidarPassword(password)
Valida contraseña segura (mínimo 8 caracteres, mayúscula, minúscula, número y símbolo).
```javascript
console.log(validarPassword("Password*123")); // true
console.log(validarPassword("123456"));       // false
```

### 5. calcularEdad(fechaNacimiento)
Calcula la edad en años enteros.
```javascript
console.log(calcularEdad("2000-05-15")); // Retorna la edad actual calculada
```

### 6. esMayorDeEdad(fechaNacimiento)
Verifica si es mayor o igual a 18 años.
```javascript
console.log(esMayorDeEdad("2000-05-15")); // true
console.log(esMayorDeEdad("2015-01-01")); // false
```

### 7. validarTelefono(telefono) (Función propia)
Valida que un teléfono tenga exactamente 10 dígitos.
```javascript
console.log(validarTelefono("5512345678")); // true
console.log(validarTelefono("12345"));      // false
```

### 8. limpiarEspacios(texto) (Función propia)
Limpia espacios extra en los extremos y duplicados intermedios.
```javascript
console.log(limpiarEspacios("   Hola    Mundo   ")); // "Hola Mundo"
```
