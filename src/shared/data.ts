import {excerciseProps} from "../components/ExcerciseGroup/Excercise";


export const exercises: excerciseProps[] = [
	{
		id: '1',
		title: 'Lunges lkajsdlakjsdlaskjdlaskjdlaskjd',
		leffBotomString: '3x',
		rightBotomString: '30 lb x 6',
		groupId: '1'
	},
	{
		id: '2',
		title: 'Forearm plank',
		leffBotomString: '1x',
		rightBotomString: '40 lb x 5',
		groupId: '1'
	},
	{
		id: '3',
		title: 'Dumbbell rows',
		leffBotomString: '100x',
		rightBotomString: '100 lb x 7',
		groupId: '2'
	},
	{
		id: '3',
		title: 'Dumbbell rows 1',
		leffBotomString: '100x',
		rightBotomString: '100 lb x 7',
		groupId: '5'
	},
	{
		id: '4',
		title: 'Dumbbell rows 2 ',
		leffBotomString: '100x',
		rightBotomString: '100 lb x 7',
		groupId: '5'
	},
	{
		id: '5',
		title: 'Dumbbell rows 3',
		leffBotomString: '100x',
		rightBotomString: '100 lb x 7',
		groupId: '5'
	},
]

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const anotherDay = new Date(today);
anotherDay.setDate(today.getDate() + 2);

export const workouts: {
	id: string,
	name: string,
	date: Date
}[] = [
	{
		name: "Led day",
		id: "1",
		date: today,
	},
	{
		name: "Upper day",
		id: "2",
		date: today,
	},
	{
		name: "Code day",
		id: "3",
		date: yesterday,
	}, {
		name: "Rest day",
		id: "4",
		date: yesterday,
	}, {
		name: "Beer day",
		id: "5",
		date: anotherDay,
	}
]
