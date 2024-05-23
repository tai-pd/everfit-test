import './Excercise.css';
import {useDrag} from "react-dnd";

export type excerciseProps = {
	id: string,
	title: string,
	leffBotomString: string,
	rightBotomString: string,
	groupId?: string,
}

const Excercise = ({id, title = 'TITLE', leffBotomString = 'LEFF', rightBotomString = 'RIGHT'}: excerciseProps) => {
	const [_, exerciseDrag] = useDrag(() => ({
		type: "exercise",
		item: { id },
	}))

	return (
		<div ref={exerciseDrag} className="excercise">
			<div className='excercise__title'>
				<span className='excercise__title__text'>{title}</span>
			</div>
			<div className='excercise__botoms'>
				<span className='excercise__leftbotoms__text'>{leffBotomString}</span>
				<p className='excercise__rightbotoms__text'>{rightBotomString}</p>
			</div>
		</div>
	);
};

export default Excercise;
