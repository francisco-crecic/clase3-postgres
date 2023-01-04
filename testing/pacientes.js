const { assert } = require('chai')
const ValidationError = require('../core/exceptions')
const pacienteValidator = require('../validators/paciente')

describe('Paciente body validator', () => {
    describe('Campo nombre', () => {
        it('nombre deberia ser requerido', () => {
            const paciente = {}
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'nombre no debe esta vacio')
        })
        it('nombre deberia tener 2 partes', () => {
            const paciente = { nombre: 'Juan' }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'nombre debe tener 2 partes')
        })
        it('nombre deberia tener solo letras', () => {
            const paciente = { nombre: 'Juan 2do' }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'nombre debe contener solo letras')
        })
    })
    describe('Campo apellidos', () => {
        it('apellidos deberia ser requerido', () => {
            const paciente = { nombre: 'Juan Eduardo' }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'apellidos no debe esta vacio')
        })
        it('apellidos deberia tener 2 partes', () => {
            const paciente = { nombre: 'Juan Eduardo', apellidos: 'Torres' }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'apellidos debe tener 2 partes')
        })
        it('apellidos deberia tener solo letras', () => {
            const paciente = { nombre: 'Juan Eduardo', apellidos: 'Torres 2do' }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'apellidos debe contener solo letras')
        })
    })
    describe('Campo edad', () => {
        it('edad deberia esta incluida', () => {
            const paciente = { nombre: 'Juan Eduardo', apellidos: 'Torres Peres' }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'La edad es requerida')
        })
        it('edad deberia ser un numero positivo', () => {
            const paciente = { nombre: 'Juan Eduardo', apellidos: 'Torres Peres', edad: -35 }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'La edad debe ser positiva o 0')
        })
        it('edad no deberia tener decimales', () => {
            const paciente = { nombre: 'Juan Eduardo', apellidos: 'Torres Peres', edad: 12.4 }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'La edad no debe tener decimal')
        })
        it('edad deberia tener solo digitos', () => {
            const paciente = { nombre: 'Juan Eduardo', apellidos: 'Torres Peres', edad: 'abc' }
            assert.throws(() => pacienteValidator.save(paciente), ValidationError, 'La edad debe contener solo digitos')
        })
    })
})
