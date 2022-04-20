const express = require("express");
const { mongoose } = require("mongoose");
const cors = require('cors')
const port = 5000;

const app = express();

const todoArr = [
  {
    id: 1,
    name: "Gym",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Running",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Dota :D",
    isCompleted: false,
  },
];

// Middlewares
app.use(cors());

// routes
app.get("/", (request, response) => {
  respond.statusCode(200);
});

app.get("/todos", (request, response) => {
  response.json(todoArr);
});

// working in progress


app.post("/todos", (request, response) => {
  {
  }
});

app.delete("/todos/id", (request, response) => {
  {
  }
});

// Connect to db

// mongoose.connect(process.env.DB_CONNECTION, () => {
//     console.log('contected to db')
// })

// listening to the server
app.listen(port);
