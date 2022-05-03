import { useContext } from 'react';
import styles from './Body.module.css';
import { Context } from '../Context';
import BodyItem from './BodyItem';

export default function Body() 
{
	const { todoData } = useContext(Context);

	return (
		<div className={styles['container']}>
			<ul className={styles['ul-list']}>
				{todoData.map(item => (
					<BodyItem key={item._id} item={item} />
				))}
			</ul>
		</div>
	);
}
