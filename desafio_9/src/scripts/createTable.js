import { options } from '../database/configDB.js'
import knex from 'knex'

// conexion a mysql
const dataBaseMariaDb = knex(options.mariaDB)
// conexions sqlite
const databaseSql = knex(options.sqliteDB)
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

    // ? tabla chat
    let chatTable = await databaseSql.schema.hasTable('chat')
    if(chatTable) {
      await databaseSql.schema.dropTable('chat')
    }
    await databaseSql.createTable('chat', table => {
      table.increments('id')
      table.string('user',30)
      table.string('date', 20)
      table.string('text',999)
    })
    console.log(`Table chat created`);
  } catch (error) {
    console.log(error)
  }
  dataBaseMariaDb.destroy()
  databaseSql.destroy()
}

createTables()
