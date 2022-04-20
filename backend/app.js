const express = require("express");
const { mongoose } = require("mongoose");
const cors = require('cors')
const port = 5000;


const app = express();
app.use(express.json())

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
    name: "Coding",
    isCompleted: false,
  },
  {
    id: 4,
    name: "Dota",
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
         console.log("todo Added", request.body)
         response.json({
             status: 'success'
         })
});

app.delete("/todos/:id", (request, response) => {
      const {id} = request.params
      console.log(id)
});



// listening to the server
app.listen(port);
