import path from 'path'
export const options = {
  mariaDb: {
    client: 'mysql',
    connection: {
      host: ' 127.0.0.1',
      user: 'root',
      password: 'newrootpassword',
      database: 'ecommerce'
    }
  },
  sqliteDB: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, './chatDB.sql')
    },
    useNullAsDefault: true
  },
  fireBase: {}
}
