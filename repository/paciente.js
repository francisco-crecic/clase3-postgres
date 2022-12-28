const { conectar } = require('../conexion')

const getAll = async () => {
    const conexion = await conectar()
    const query = `SELECT * from pacientes`
    const result = await conexion.query(query)
    conexion.release()
    return result.rows;
};

const getById = async id => {
    const conexion = await conectar()
    const query = `SELECT * from pacientes where id = $1`
    const { rows: [ paciente ] } = await conexion.query(query, [ id ])
    conexion.release()
    return paciente;
}

const updateById = async (id, data) => {
    const { nombre = null, apellidos = null, edad = null } = data;
    const conexion = await conectar()
    const query = `update pacientes set
        nombre=coalesce($2,nombre),
        apellidos=coalesce($3,apellidos),
        edad=coalesce($4,edad)
        where id = $1 returning *`
    const { rows: [ paciente ] } = await conexion.query(query, [ id, nombre, apellidos, edad ])
    conexion.release()
    return paciente;
}

const create = async (data) => {
    const { nombre = null, apellidos = null, edad = null } = data;
    const conexion = await conectar()
    const query = `insert into pacientes (nombre, apellidos, edad) values ($1,$2,$3) returning *`
    const { rows: [ paciente ] } = await conexion.query(query, [ nombre, apellidos, edad ])
    conexion.release()
    return paciente;
}

module.exports = {
    getAll,
    getById,
    updateById,
    create
}