const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const port = 5000;
const Todo = require('./models/Todos')
require("dotenv/config")

const app = express();
app.use(express.json());

let todoArr = [
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
 Todo.find()
 .then(data => response.json(data))
});

app.get("/todos", (request, response) => {
  response.json(todoArr);
});

// working in progress
app.post("/todos", (request, response) => {
  const todo = request.body;
  console.log(todo.name)
const post = new Todo({
    name: todo.name,
    isCompleted: todo.isCompleted
})
console.log(post)

  post.save()
  .then(data => {
    response.json(data)
  })
  .catch(error => {
    console.log(error)
  })
  
  response.json({
    status: "success",
  });
});

app.delete("/todos/:id", (request, response) => {
  const { id } = request.params;
  todoArr = todoArr.filter((el) => el.id !== +id);
  response.json({
    status: "success",
  });
});

app.patch("/todos/:id", (request, response) => {
  const { id } = request.params;
  console.log(id + "patch");
  todoArr = todoArr.map((el) => {
    if (el.id === +id) {
      el.isCompleted = !el.isCompleted;
      return el;
    }
    return el;
  });
  response.json({
    status: "success",
  });
});

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION_URL,
  { userNewUrlParser: true },
  () => console.log("connected")
);

// listening to the server
app.listen(port);
