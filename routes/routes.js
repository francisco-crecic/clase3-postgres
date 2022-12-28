const router = require('express').Router()
const VERSION = 'v1';

router.use(`/${VERSION}/pacientes`, require('./paciente.routes'))

module.exports = router;