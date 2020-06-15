// index.js
// reference: https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
// https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas

const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/databaseConfig.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Prints "MongoError: bad auth Authentication failed."
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// require Messages routes
require('./routes/messageRoute.js')(app);


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});





