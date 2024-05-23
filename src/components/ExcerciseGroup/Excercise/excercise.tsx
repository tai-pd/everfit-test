import './excercise.css';

export type excerciseProps = {
	key: string,
	title: string,
	leffBotomString: string,
	rightBotomString: string,
	groupId?: string,
}

const Excercise = ({key, title = 'TITLE', leffBotomString = 'LEFF', rightBotomString = 'RIGHT'}: excerciseProps) => {
	return (
		<div className="excercise" draggable>
			<div className='excercise-title'>
				<span className='excercise-title__text'>{title}</span>
			</div>
			<div className='excercise-botoms'>
				<span className='excercise-leftbotoms__text'>{leffBotomString}</span>
				<p className='excercise-rightbotoms__text'>{rightBotomString}</p>
			</div>
		</div>
	);
};

export default Excercise;
