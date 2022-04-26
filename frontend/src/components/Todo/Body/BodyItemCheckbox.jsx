import { useContext } from 'react';
import classes from './BodyItemCheckbox.module.css';
import { Context } from '../Context';

/**
 *
 * @param root0
 * @param root0.item
 */
export default function TodoBodyItemCheckbox({ item }) 
{
	const { container, nameText, checkmark, checked } = classes;
	const { _id, name, isCompleted } = item;

	const { checkTodoAsCompleted } = useContext(Context);

	const checkCompleted = isCompleted ? checked : '';

	return (
		<div className={container}>
			<input
				onChange={() => checkTodoAsCompleted(_id)}
				className={checkmark}
				type="checkbox"
				checked={isCompleted}
			/>
			<p className={`${nameText} ${checkCompleted}`}>{name}</p>
		</div>
	);
}
