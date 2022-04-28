const Todo = require('../Models/Todos');

exports.updateTodoHandler = async(request, response) => 
{
	const { id } = request.params;

	try 
	{
		const updatedTodo = await Todo.updateOne(
      { _id: id },
      { $set: { isCompleted: true } }
		);

    response.json(updatedTodo);
	}
	catch (error) 
	{
    response.json({ message: error });
	}
};