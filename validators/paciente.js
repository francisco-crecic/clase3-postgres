
const ValidationError = require('../core/exceptions')

const save = paciente => {
    let { nombre = '', apellidos = '', edad = null} = paciente;
    edad = String(edad)

    // limpieza basica
    nombre = nombre.trim()
    apellidos = apellidos.trim()

    // Nombre
    if (nombre.split(' ').length !== 2) {
        throw new ValidationError('Debe tener 2 nombres')
    }
    if (nombre.match(/\d/g) !== null) {
        throw new ValidationError('Nombres debe contener solo letras')
    }

    // Apellidos
    if (apellidos.split(' ').length !== 2) {
        throw new ValidationError('Debe tener 2 apellidos')
    }
    if (apellidos.match(/\d/g) !== null) {
        throw new ValidationError('Apellidos debe contener solo letras')
    }

    // Edad
    if (Number.isInteger(edad) && edad < 0) {
        throw new ValidationError("La edad debe ser positiva o 0");
    }
    if (edad.match(/\D/g) != null) {
        throw new ValidationError("La edad debe ser un entero");
    }
    if (parseInt(edad) < 0) {
        throw new ValidationError("La edad debe ser positiva o 0");
    }
}

module.exports = {
    save
}