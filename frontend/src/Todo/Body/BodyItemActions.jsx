import { useContext } from 'react';
import styles from './BodyItemActions.module.css';
import { Context } from '../Context';

export default function TodoBodyItemActions({ id }) 
{
	const { deleteTodo } = useContext(Context);

	return (
		<div>
			<button onClick={() => deleteTodo(id)} className={styles['delete-btn']}>
            Delete
			</button>
		</div>
	);
}
