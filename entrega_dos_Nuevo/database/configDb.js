import path from 'path'
import mongoose from 'mongoose'
import configConnectionsMongo from './configConnectionsMongo'
export const options = {
    mariaDb : {
        client : 'mysql',
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
    mongoDB : {
        async () {
            try {
                mongoose.set('StrictQuery', false)
                const db = await mongoose.connect(configConnectionsMongo.mongodbUrl , {
                    useNewUrlParser:true,
                    useUnifiedTopology: true
                })
                console.log(`Database connect: ${db.connection.name}`);
            } catch (error) {
               console.log(error); 
            }
        }
    },
    fireBase: {
        
    }
}

// aqui colocar las conexiones para mongodb 
// y para firebase