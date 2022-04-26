import classes from './MainContainer.module.css';
import Header from '../Header/Header';
import Body from '../Body/Body';

export default function TodoMainContainer() 
{
	const { title } = classes;

	return (
		<>
			<h1 className={title}>Todo App</h1>
			<Header/>
			<Body/>
		</>
	);
}
