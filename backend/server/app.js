const { mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
const Todo = require("../server/models/Todos");

require("dotenv/config");
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// Middlewares
app.use(cors());

// routes
app.get("/", (request, response) => {
  response.send("Home Route");
});

app.get("/todos", (request, response) => {
  Todo.find()
    .then((data) => response.json(data))
    .catch((error) => {
      throw new Error(error);
    });
});

app.post("/todos", (request, response) => {
  const todo = request.body;

  const post = new Todo({
    name: todo.name,
    isCompleted: todo.isCompleted,
  });

  post
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      throw new Error(error);
    });
});

app.delete("/todos/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const removedTodo = await Todo.deleteOne({ _id: id });

    response.json(removedTodo);
  } catch (error) {
    response.json({ message: error });
  }
});

app.patch("/todos/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const updatedTodo = await Todo.updateOne(
      { _id: id },
      { $set: { isCompleted: true } }
    );

    response.json(updatedTodo);
  } catch (error) {
    response.json({ message: error });
  }
});

// db connection
mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    throw new Error(error);
  });

// listening to the server
app.listen(PORT);