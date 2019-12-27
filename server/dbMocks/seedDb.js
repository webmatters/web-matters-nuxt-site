const mongoose = require('mongoose')
const User = require('../models/user')
const keys = require('../keys')
const data = require('./data.js')

class DB {
  constructor() {
    this.collections = Object.keys(data).map(collection => collection)
  }

  async cleanDb() {
    for (const collection of this.collections) {
      const model = data[collection].model
      if (model) {
        await model.deleteMany({}, () => {})
        console.log(
          `Data for model ${model.collection.collectionName} Deleted!`
        )
      }
    }
  }

  async pushDataToDb() {
    const collectionToResolve = []
    for (const collection of this.collections) {
      collectionToResolve.push(
        Promise.all(
          data[collection].items.map(item =>
            new data[collection].model(item).save()
          )
        ).then(data => console.log(collection, 'collection saved!'))
      )
    }

    return Promise.all(collectionToResolve)
  }

  async seedDb() {
    await this.cleanDb()
    await this.pushDataToDb()
    console.log('Data Populated!')
  }
}

mongoose
  .connect(keys.DB_URI, { useNewUrlParser: true })
  .then(async () => {
    const db = new DB()
    await db.seedDb()
    console.log('You can close connection now!')
  })
  .catch(err => console.log(err))
