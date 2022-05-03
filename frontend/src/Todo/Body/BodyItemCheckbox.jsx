import { useContext } from 'react';
import styles from './BodyItemCheckbox.module.css';
import { Context } from '../Context';

export default function TodoBodyItemCheckbox({ item }) 
{
	const { _id, name, isCompleted } = item;

	const { checkTodoAsCompleted } = useContext(Context);

	return (
		<div className={styles['container']}>
			<input
				onChange={() => checkTodoAsCompleted(_id)}
				className={styles['checkmark']}
				type="checkbox"
				checked={isCompleted}
			/>
			<p className={styles['name-text']}>{name}</p>
		</div>
	);
}
