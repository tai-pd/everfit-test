import Excercise, {excerciseProps} from './Excercise/excercise'
import './excerciseGroup.css';
import addIcon from "../../shared/icons/Group.svg";
import excercise from "./Excercise/excercise";

type excerciseGroupProps = {
	title: string,
	exercises: excerciseProps[],
}
const ExcerciseGroup = ({title, exercises = []}: excerciseGroupProps) => {
	return (
		<div className="excerciseGroup" draggable >
			<div className='excerciseGroup-title'>
				<p className='excerciseGroup-title__line'>{title ?? 'TITLE'}</p>
				<span className='excerciseGroup-title__icon'>...</span>
			</div>
			<div className='excerciseGroup__exercises'>
				{exercises.length > 0 && exercises.map((exercise) => (
					<Excercise {...exercise}/>
				))}
			</div>
			<button className={"excerciseGroup-button"}>
				<img className={"excerciseGroup-icon"} src={addIcon} alt={"image"}/>
			</button>
		</div>
	);
};

export default ExcerciseGroup;
