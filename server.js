const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require('body-parser');
const auth = require("./authMiddleware");
const router = jsonServer.router("serverdata.json");
const formRouter = require("./src/app/formRoute/formRoutes");
const mongoose = require("mongoose");
var path = require('path');
const mongodb = require('mongodb');
const cors = require('cors');
var path = require('path');
// Initialize the app
const app = express();
// Import dotenv
require("dotenv").config();
require('dotenv/config');
app.use(bodyParser.json());
var port = process.env.PORT || 3000;

// Nodemailer
const nodemailer = require("nodemailer");
// Importing isomorphic-fetch package
const fetch = require("isomorphic-fetch");
// Import multer
const multer = require("multer");

const Queue = require('bull');
// Import dotenv
require("dotenv").config();

var request = require('request');

//const pug = require('pug');

//const Email = require('email-templates');

//const { nodemailerMjmlPlugin } = require('nodemailer-mjml');
//const fs = require('fs').promises;
//const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
//import fetch from 'node-fetch';
//const fetch2 = require('node-fetch'); // Use require for Node.js
//const fetch2 = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//const fetch2 = require("node-fetch");
const mustache = require("mustache");
const mjml = require("mjml");


app.use(express.urlencoded({ extended: false }));


// Making public folder static where index.html file is present
// By making it static, we can easily serve index.html page

app.use(express.static("public"));


var data = process.env.MONGODB_URI;
mongoose.connect(data);


















// Middleware
app.use(cors());
app.use(express.json());



app.use(formRouter);

app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/SportsStore"));

app.listen(port, () => {
  console.log("Server is running...");
});


// MongoDB connection
/*mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});*/

// Define a Mongoose schema for the form data
/*const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Form = mongoose.model('Form', FormSchema);*/

// Define a POST route to handle form submissions
/*app.post('/submit', async (req, res) => {
    try {
        const formData = new Form(req.body);
        await formData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to submit form', error });
    }
});

// Start the server
const PORT = 3600;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});*/









// This program creates a data server which uses Express
// to retrieve data from a MongoDB instance to create three
// distinct endpoints on port 3600 of locahost.  Data which
// appears in the MongoDB “artifacts” table become
// JSON-formatted responses to requests on port 3600.
//
// “Route” is a crucial concept in Express.  This particular
// dataserver defines three routes:
// * ‘/’ returns a human-readable message;
// * ‘/artifacts’ returns a list of artifact names; and
// * `/artifacts/NAME’ returns details about NAME.
//const express = require('express')
//const app = express()



/*//const express = require('express');
const MongoClient = require('mongodb').MongoClient;

//const app = express();
const port = 3600; // Replace with your desired port

const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'my-test'; // Replace with your database name
const table = 'artifact'; // Replace with your collection name

// Connect to MongoDB asynchronously
async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);

    // Use the database
    app.route('/').get((req, res) => {
      res.send("Recognized endpoints on this server include '/artifacts' and '/artifacts/NAME'.");
    });

    app.route('/artifacts').get(async (req, res) => {
      try {
        const artifacts = await db.collection(table).find().toArray();
        res.send(artifacts);
      } catch (err) {
        console.error('Error fetching artifacts:', err);
        res.status(500).send('Internal Server Error');
      }
    });

    app.route('/artifacts/:scriptname').get(async (req, res) => {
      try {
        const scriptname = req.params.scriptname;
        const artifact = await db.collection(table).findOne({ scriptname });
        if (!artifact) {
          res.status(404).send('Artifact not found');
        } else {
          res.send(artifact);
        }
      } catch (err) {
        console.error('Error fetching artifact:', err);
        res.status(500).send('Internal Server Error');
      }
    });

    // Close the connection when the server is closed
    app.on('close', async () => {
      await client.close();
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}*/

/*app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/SportsStore"));*/

// Start the server after connecting to the database
/*connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});*/


/*const enableHttps = true;
const ssloptions = {};

if (enableHttps) {
    ssloptions.cert =  fs.readFileSync("./ssl/sportsstore.pem");
    ssloptions.key = fs.readFileSync("./ssl/sportsstore-key.pem");
}
//const app = express();
//app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/SportsStore"));
app.listen(3600,
    () => console.log("HTTP Server running on port 80"));
if (enableHttps) {
    https.createServer(ssloptions, app).listen(443,
        () => console.log("HTTPS Server running on port 443"));
} else {
    console.log("HTTPS disabled")
}*/
