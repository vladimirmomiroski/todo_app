import classes from './BodyItem.module.css';

/**
 *
 * @param root0
 * @param root0.item
 */
export default function TodoBodyItem({ item }) 
{
	const { li } = classes;

	const { _id } = item;

	return (
		<li className={li}>
			<BodyItemCheckbox item={item} />
			<BodyItemActions id={_id} />
		</li>
	);
}
