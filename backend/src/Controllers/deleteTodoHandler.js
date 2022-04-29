const Todo = require('../Models/Todos');

exports.deleteTodoHandler = (request, response) => 
{
	const { id } = request.params;
	
	Todo.deleteOne({ _id: id })
    .then(data => 
    {
        response.json(data);
    })
    .catch(error => 
    {
    	throw new Error(error);
    });
};
