const Todo = require('../Models/Todos');

exports.getTodosRouteHandler = (request, response) => 
{
    Todo.find()
    .then(data => response.json(data))
    .catch(error => 
    {
    	throw new Error(error);
    });
};
