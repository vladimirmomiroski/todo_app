import { useContext, useState } from 'react';
import classes from './Header.module.css';
import { Context } from '../Context';

/**
 *
 */
export default function TodoHeader() 
{
	const { container, input, btn } = classes;

	const { addTodo } = useContext(Context);

	const [ todoName, setTodoName ] = useState('');

	const onSubmitHandler = e => 
	{
    e.preventDefault();
    if (todoName) 
    {
    	const id = new Date().valueOf();
    	const todoItem = {
        id,
        isCompleted: false,
        name: todoName
      };

    	addTodo(todoItem);
    	setTodoName('');
    }
	};

	return (
		<form onSubmit={onSubmitHandler} className={container}>
			<input
				value={todoName}
				onChange={e => setTodoName(e.target.value)}
				className={input}
				type="text"
				placeholder="New Todo"
			/>
			<button className={btn}>Add ToDo</button>
		</form>
	);
}
