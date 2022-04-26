import classes from './MainContainer.module.css';

/**
 *
 */
export default function TodoMainContainer() 
{
	const { title } = classes;

	return (
		<>
			<h1 className={title}>Todo App</h1>
			<TodoHeader/>
			<TodoBody/>
		</>
	);
}
