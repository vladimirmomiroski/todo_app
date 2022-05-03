import styles from './MainContainer.module.css';
import Header from '../Header/Header';
import Body from '../Body/Body';

export default function TodoMainContainer() 
{
	return (
		<>
			<h1 className={styles['title']}>Todo App</h1>
			<Header/>
			<Body/>
		</>
	);
}
