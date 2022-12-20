import mongoose from 'mongoose'
import configConnectionsMongo from './configConnectionsMongo'

;(async () => {
  try {
    const db = await mongoose.connect(configConnectionsMongo.mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`Databaseconnect ${db.connection.name}`)
  } catch (error) {
    console.log(error)
  }
})()
