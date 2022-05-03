import styles from './Main.module.css';
import MainContainer from '../Todo/MainContainer/MainContainer';

export default function TodoMain() 
{
	return (
		<div className={styles['container']}>
			<MainContainer />
		</div>
	);
}
