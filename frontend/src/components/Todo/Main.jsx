import classes from './Main.module.css';

export default function TodoMain() 
{
	const { container } = classes;

	return (
		<div className={container}>
			<MainContainer />
		</div>
	);
}
