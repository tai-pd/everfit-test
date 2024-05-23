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
			<div className='excercise-title'>
				<span className='excercise-title-text'>{title}</span>
			</div>
			<div className='excercise-botoms'>
				<span className='excercise-leftbotoms-text'>{leffBotomString}</span>
				<p className='excercise-rightbotoms-text'>{rightBotomString}</p>
			</div>
		</div>
	);
};

export default Excercise;
