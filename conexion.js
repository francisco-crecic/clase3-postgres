const {
  PG_HOST: host,
  PG_PORT: port,
  PG_USER: user,
  PG_PASS: password,
  PG_NAME: database
} = process.env;

const { Pool } = require('pg')
const pool = new Pool({ user, host, port, database, password })

/**
 * @ref: https://app.supabase.com/
 */

// const pool = new  Pool({
//     user: 'postgres',
//     host: 'db.zoddvlgpfkqayuzgmnfr.supabase.co',
//     port: 5432,
//     database: 'postgres',
//     password: '!curso-express'
// })

async function conectar () {
  const client = await pool.connect()

  return client
}

exports.conectar = conectar
