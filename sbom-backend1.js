var MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/"
const dbName = 'my-test'
const table = 'artifact'



MongoClient.connect(url)
  .then((client) => {
    const db = client.db(dbName);
    return db.collection(table).find().toArray();
  })
  .then((artifact,err) => {
    // ... process artifacts
    if (err) throw err
            artifact.forEach((value) => {
            console.log(value.scriptname)
        })
        

  })
  .catch((err) => {
    console.error(err);
  });
