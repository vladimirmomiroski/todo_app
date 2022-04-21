const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const port = 5000;
const Todo = require("./models/Todos");
require("dotenv/config");

const app = express();
app.use(express.json());

// Middlewares
app.use(cors());

// routes
app.get("/", (request, response) => {
  response.send(todoArr);
});

app.get("/todos", (request, response) => {
  Todo.find().then((data) => response.json(data));
});

// working in progress
app.post("/todos", (request, response) => {
  const todo = request.body;
  console.log(todo.name);
  const post = new Todo({
    name: todo.name,
    isCompleted: todo.isCompleted,
  });
  console.log(post);

  post
    .save()
    .then((data) => {
      response.json(data);
      response.setHeader('Content-Type', 'text/plain');
    })
    .catch((error) => {
      console.log(error);
    });

  response.json({
    status: "success",
  });
});

app.delete("/todos/:id", async (request, response) => {
  const { id } = request.params;
  console.log(id);
  try {
    const removedTodo = await Todo.deleteOne({ _id: id });
    response.json(removedTodo);
    response.setHeader('Content-Type', 'text/plain');
  } catch (error) {
    response.json({ message: error });
  }


  response.json({
    status: "success",
  });
});

app.patch("/todos/:id", async (request, response) => {
  const { id } = request.params;
  console.log(id);
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: id },
      { $set: { isCompleted: true} }
    );
    response.json(updatedTodo);
    response.setHeader('Content-Type', 'text/plain');
  } catch (error) {
    response.json({ message: error });
  }


  response.json({
    status: "success",
  });
});

mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// listening to the server
app.listen(port);
