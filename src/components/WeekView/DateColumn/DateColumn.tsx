import "./DateColumn.css"
import {getDayOfMonth, getWeekDayName, isCurrentDate} from "../../../shared/utility";
import {DateTitle} from "./DateTitle/DateTitle";
import {ReactNode} from "react";
import {useDrop} from "react-dnd";
import {useDataContext} from "../../DataContext/DataContext";

interface DateColumnProps {
	date: Date;
	content?: ReactNode
}


export const DateColumn = ({date, content}: DateColumnProps) => {
	const {moveWorkOut} = useDataContext()
	const [_, drop] = useDrop(
		() => ({
			accept: "group",
			drop: (item: {id: string}) => {
				moveWorkOut(item.id, date)
			},
		}),
		[]
	)

	return <div ref={drop} className={"dateColumn-container"}>
		<div className={"dateColumn-header"}>
			{getWeekDayName(date).toUpperCase()}
		</div>
		<div className={"dateColumn-content"}>
			<DateTitle addable highlight={isCurrentDate(date)}>{getDayOfMonth(date)}</DateTitle>
			<div className={"dateColumn-main-content"}>
				{content}
			</div>
		</div>
	</div>
}
