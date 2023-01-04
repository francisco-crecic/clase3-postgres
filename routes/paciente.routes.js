
const router = require('express').Router()
const ValidationError = require('../core/exceptions')
const pacienteRepository = require('../repository/paciente')
const pacienteValidator = require('../validators/paciente')

/**
 * Consulta listado de pacientes
 *
 * req: objeto que representa el request (peticion) hecha por el cliente
 * res: objeto que representa el response (respuesta) hecha por el servidor
 */
router.get('/', async (req, res) => {
  const pacientes = await pacienteRepository.getAll()

  res.send(pacientes)
})

/**
 * Consulta informacion de un paciente por su id
 *
 */
router.get('/:pacienteId', async (req, res) => {
  // consultar el parametro del endpoint
  const pacienteId = Number(req.params.pacienteId)
  const paciente = await pacienteRepository.getById(pacienteId)

  if (!paciente) { res.status(404).send() } // .send('Recurso no encontrado')

  // Junto con la data, podemos enviar un codigo HTTP de respuesta
  res.status(200).send(paciente)
})

/**
 * Registra un nuevo paciente
 *
 */
router.post('/', async (req, res) => {
  try {
    const { body: paciente } = req

    pacienteValidator.save(paciente)
    const nuevoRegistro = await pacienteRepository.create(paciente)

    res.status(201).send(nuevoRegistro)
  } catch (error) {
    // si es error de valicacion, devolvemos 400
    if (error instanceof ValidationError) {
      res.status(400).send({ error: error.message })

      return
    }

    // cualquier otro error, es 500
    // console.log({ error })
    res.status(500).send()
  }
})

/**
 * Modifica la información de un paciente
 *
 */
router.put('/:pacienteId', async (req, res) => {
  const pacienteId = Number(req.params.pacienteId)
  const { body: nuevosValores } = req

  const paciente = await pacienteRepository.getById(pacienteId)

  if (!paciente) { return res.status(404).send() }

  const nuevaData = await pacienteRepository.updateById(pacienteId, nuevosValores)

  return res.status(200).send(nuevaData)
})

/**
 * Elimina el registro de un paciente
 *
 */
router.delete('/:pacienteId', async (req, res) => {
  const pacienteId = Number(req.params.pacienteId)

  const paciente = await pacienteRepository.delete(pacienteId)

  if (!paciente) { return res.status(404).send() }

  return res.status(200).send(paciente)
})

module.exports = router
