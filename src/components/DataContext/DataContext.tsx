import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {exercises, workouts} from "../../shared/data";
import {excerciseProps} from "../ExcerciseGroup/Excercise/Excercise";

export const DataContext = createContext<{
	workout: { id: string, name: string, date: Date }[],
	exercise: excerciseProps[],
	moveWorkOut: (id: string, toDate: Date) => void,
	moveExercise: (id: string, toGroup: string) => void,
}>({
	workout: [],
	exercise: [],
	moveWorkOut: () => null,
	moveExercise: () => null
});

export const DataProvider = ({children}: {
	children: ReactNode
}) => {
	const [workout, setWorkout] = useState(workouts);
	const [exercise, setExercise] = useState(exercises);

	const moveWorkOut = (id: string, toDate: Date) => {
		let newWorkout = [...workout]
		const updatedWorkout = newWorkout.find(el => el.id === id);
		const index = newWorkout.findIndex(el => el.id === id);
		if (updatedWorkout?.date) {
			newWorkout[index].date = toDate
			setWorkout(newWorkout)
		}
	}

	const moveExercise =
		(id: string, toGroup: string) => {
			let newExercise = [...exercise]
			const updatedExercise = exercise.find(el => el.id === id);
			const index = exercise.findIndex(el => el.id === id);
			if (updatedExercise?.groupId) {
				newExercise[index].groupId = toGroup
				setExercise(newExercise)
			}
		}

	return <DataContext.Provider value={{
		exercise,
		workout,
		moveWorkOut,
		moveExercise
	}}>
		{children}
	</DataContext.Provider>
}

export const useDataContext = () => useContext(DataContext);
