import classes from './Main.module.css';
import MainContainer from '../Todo/MainContainer/MainContainer';

export default function TodoMain() 
{
	const { container } = classes;

	return (
		<div className={container}>
			<MainContainer />
		</div>
	);
}
