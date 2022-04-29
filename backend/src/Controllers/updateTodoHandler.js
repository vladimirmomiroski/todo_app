const Todo = require('../Models/Todos');

exports.updateTodoHandler = (request, response) => 
{
	const { id } = request.params;

	Todo.updateOne(
      { _id: id },
      { $set: { isCompleted: true } }
	  ) 
	  .then(data => 
	  {
		response.json(data);
	  })
	  .catch(error => 
	  {
	  	throw new Error(error);
	  });
};