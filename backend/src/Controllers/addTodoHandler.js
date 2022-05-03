const Todo = require('../Models/Todos');

exports.addTodoHandler = (request, response) => 
{
	const todo = request.body;

	const post = new Todo({
    name: todo.name,
    isCompleted: todo.isCompleted
  });

  post
    .save()
    .then(data => 
    {
      response.json(data);
    })
    .catch(error => 
    {
    	throw new Error(error);
    });
};