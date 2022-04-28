const Todo = require('../Models/Todos');

exports.deleteTodoHandler = async(request, response) => 
{
	const { id } = request.params;

	try 
	{
		const removedTodo = await Todo.deleteOne({ _id: id });

    response.json(removedTodo);
	}
	catch (error) 
	{
    response.json({ message: error });
	}
};