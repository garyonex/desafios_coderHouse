import { options } from '../database/configDB.js'
import knex from 'knex'

// conexion a mysql

const dataBaseMariaDb = knex(options.mariaDB)

// crear tables
const createTables = async () => {
  let productTable = await dataBaseMariaDb.schema.hasTable('productos')
  if (productTable) {
    await dataBaseMariaDb.schema.dropTable('productos')
    console.log('Deleted table... creating new')
  }
  try {
    await dataBaseMariaDb.schema.createTable('productos', (table) => {
      table.increments('id')
      table.string('title', 40).nullable(false)
      table.integer('price').nullable(false)
      table.string('thumbnail', 200).nullable(false)
    })
    console.log('Table created ')
  } catch (error) {
    console.log(error)
  }
  dataBaseMariaDb.destroy()
}

createTables()
