import styles from './BodyItem.module.css';
import BodyItemCheckbox from './BodyItemCheckbox';
import BodyItemActions from './BodyItemActions';

export default function TodoBodyItem({ item }) 
{
	const { _id } = item;

	return (
		<li className={styles['li-item']}>
			<BodyItemCheckbox item={item} />
			<BodyItemActions id={_id} />
		</li>
	);
}
