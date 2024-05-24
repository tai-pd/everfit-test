import Excercise, {excerciseProps} from './Excercise/Excercise'
import './ExcerciseGroup.css';
import addIcon from "../../shared/icons/Group.svg";
import {useDrag, useDrop} from "react-dnd";
import {useDataContext} from "../DataContext/DataContext";

type excerciseGroupProps = {
	title: string,
	exercises: excerciseProps[],
	id: string
}
const ExcerciseGroup = ({title, exercises = [], id}: excerciseGroupProps) => {
	const {moveExercise} = useDataContext()

	const [_, groupDrag] = useDrag(() => ({
		type: "group",
		item: {id},
	}))

	const [__, exerciseDrop] = useDrop(
		() => ({
			accept: "exercise",
			drop: (item: { id: string }) => {
				moveExercise(item.id, id)
			},
		}),
		[]
	)

	return (
		<div ref={groupDrag} className="excerciseGroup">
			<div ref={exerciseDrop}>
				<div className='excerciseGroup-title'>
					<p className='excerciseGroup-title-line'>{title ?? 'TITLE'}</p>
					<span className='excerciseGroup-title-icon'>...</span>
				</div>
				<div className='excerciseGroup-exercises'>
					{exercises.length > 0 && exercises.map((exercise) => (
						<Excercise {...exercise} id={exercise.id}/>
					))}
				</div>
				<button className={"excerciseGroup-button"}>
					<img className={"excerciseGroup-icon"} src={addIcon} alt={"image"}/>
				</button>
			</div>
		</div>
	);
};

export default ExcerciseGroup;
