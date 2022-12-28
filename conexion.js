const { Pool } = require('pg')

// const pool = new  Pool({
//     user: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     database: 'pacientes',
//     password: '#postgres.crecic#'
// })

/**
 * @ref: https://app.supabase.com/
 */

const pool = new  Pool({
    user: 'postgres',
    host: 'db.zoddvlgpfkqayuzgmnfr.supabase.co',
    port: 5432,
    database: 'postgres',
    password: '!curso-express'
})

async function conectar() {
    const client = await pool.connect()
    return client;
}

exports.conectar = conectar;