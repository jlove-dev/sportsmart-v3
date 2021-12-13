const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');
const routes = require('./routes/base.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

mongoose.connect(dbConfig.url).then(() => {
  console.log('Connected to DB')
}).catch(err => {
  console.log('Cannot connect to db because:', err);
  process.exit();
})

const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`)
});
