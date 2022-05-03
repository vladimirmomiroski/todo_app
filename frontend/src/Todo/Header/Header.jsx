import { useContext, useState } from 'react';
import styles from './Header.module.css';
import { Context } from '../Context';

export default function TodoHeader() 
{
	const { addTodo } = useContext(Context);
	const [ todoName, setTodoName ] = useState('');

	const onSubmitHandler = e => 
	{
   		e.preventDefault();
        	if (todoName) 
    	{
    	const todoItem = 
		{
        isCompleted: false,
        name: todoName
        };

    	addTodo(todoItem);
    	setTodoName('');
   		}
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles['container']}>
			<input
				value={todoName}
				onChange={e => setTodoName(e.target.value)}
				className={styles['input']}
				type="text"
				placeholder="New Todo"
			/>
			<button className={styles['button']}>Add ToDo</button>
		</form>
	);
}
