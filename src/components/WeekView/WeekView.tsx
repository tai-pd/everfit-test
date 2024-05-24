import DateColumn from "./DateColumn/DateColumn";
import React from "react";
import './WeekView.css';
import ExcerciseGroup from "../ExcerciseGroup/ExcerciseGroup";
import {isSameDate} from "../../shared/utility";
import {useDataContext} from "../DataContext/DataContext";

interface WeekViewProps {
	dates: Date[];
}


const WeekView = ({dates}: WeekViewProps) => {
	const {exercise: exercises, workout: workouts} = useDataContext()
	return <div className={"weekView-container"}>
		{
			dates.map(date => <DateColumn key={date.getTime()}
			                              content={workouts.filter(el => isSameDate(el.date, date)).map(group => {
				                              return <ExcerciseGroup key={group.id} id={group.id}
				                                                     title={group?.name ?? ""}
				                                                     exercises={exercises.filter(el => el.groupId === group.id)}/>
			                              })}
			                              date={date}/>)
		}
	</div>
}

export default WeekView
