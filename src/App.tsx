import './App.css';
import WeekView from "./components/WeekView/WeekView";
import {createWeekFromDate} from "./shared/utility";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DataProvider} from "./components/DataContext/DataContext";

function App() {
	const currentWeek = createWeekFromDate(new Date());

	return (
		<div className="App">
			<DataProvider>
				<DndProvider backend={HTML5Backend}>
					<WeekView dates={currentWeek}/>
				</DndProvider>
			</DataProvider>
		</div>
	);
}

export default App;
