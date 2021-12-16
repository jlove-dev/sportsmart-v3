const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');
const app = express();

mongoose.set('debug', true);

//models
require('./models/seller.model');

//Routes
const dataEntryRoutes = require('./routes/data-entry.base.route');
const posRoutes = require('./routes/pos.base.route');


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//Main route
app.use('/sellers', dataEntryRoutes);
app.use('/pos', posRoutes)

//mongo running
mongoose.connect(dbConfig.url).then(() => {
  console.log('Connected to DB')
}).catch(err => {
  console.log('Cannot connect to db because:', err);
  process.exit();
})

//Server connections
const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`)
});
