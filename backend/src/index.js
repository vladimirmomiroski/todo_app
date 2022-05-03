const { mongoose } = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config({ path:__dirname + '/./../.env' });

const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', require('./Routes/routes'));
app.use('/todos', require('./Routes/routes'));
app.use('/todos/:id', require('./Routes/routes'));

mongoose
  .connect(DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => 
  {
  	throw new Error(error);
  });

app.listen(5000);
