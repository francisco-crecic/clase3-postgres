
const ValidationError = require('../core/exceptions')

const save = paciente => {
  let { nombre = '', apellidos = '', edad = null } = paciente

  // limpieza basica
  nombre = nombre.trim()
  apellidos = apellidos.trim()

  // Nombre
  if (nombre === '') {
    throw new ValidationError('nombre no debe esta vacio')
  } else if (nombre.split(' ').length !== 2) {
    throw new ValidationError('nombre debe tener 2 partes')
  } else if (nombre.match(/\d/g) !== null) {
    throw new ValidationError('nombre debe contener solo letras')
  }

  // Apellidos
  if (apellidos === '') {
    throw new ValidationError('apellidos no debe esta vacio')
  } else if (apellidos.split(' ').length !== 2) {
    throw new ValidationError('apellidos debe tener 2 partes')
  } else if (apellidos.match(/\d/g) !== null) {
    throw new ValidationError('apellidos debe contener solo letras')
  }

  // Edad
  if (edad === null) {
    throw new ValidationError('La edad es requerida')
  } else if (Number.isInteger(edad) && edad < 0) {
    throw new ValidationError('La edad debe ser positiva o 0')
  } else if (!isNaN(edad) && Number(edad) % 1 !== 0) {
    throw new ValidationError('La edad no debe tener decimal')
  } else if (edad.toString().match(/\D/g) !== null) {
    throw new ValidationError('La edad debe contener solo digitos')
  }
}

module.exports = {
  save
}
