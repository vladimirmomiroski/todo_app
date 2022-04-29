const { mongoose } = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', require('./Routes/routes'));
app.use('/todos', require('./Routes/routes'));
app.use('/todos/:id', require('./Routes/routes'));

mongoose
  .connect('mongodb+srv://vladimir:R8QqnGKLQrEW1F8v@cluster0.8wijq.mongodb.net/todo_app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => 
  {
  	throw new Error(error);
  });

app.listen(5000);
