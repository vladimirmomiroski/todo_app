import { useContext } from 'react';
import classes from './BodyItemActions.module.css';
import { Context } from '../Context';

/**
 *
 * @param root0
 * @param root0.id
 */
export default function TodoBodyItemActions({ id }) 
{
	const { deleteBtn } = classes;

	const { deleteTodo } = useContext(Context);

	return (
		<div>
			<button onClick={() => deleteTodo(id)} className={deleteBtn}>
        Delete
			</button>
		</div>
	);
}
