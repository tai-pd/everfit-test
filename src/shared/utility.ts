export const createWeekFromDate = (date: Date): Date[] => {

	const dayOfWeek = date.getDay();
	const diffToMonday = (dayOfWeek + 6) % 7;

	const monday = new Date(date);
	monday.setDate(date.getDate() - diffToMonday);

	const week = [];
	for (let i = 0; i < 7; i++) {
		const date = new Date(monday);
		date.setDate(monday.getDate() + i);
		week.push(date);
	}

	return week;
}
type WeekDayName = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
export const getWeekDayName = (date: Date): WeekDayName => {
	const weekDayNames: WeekDayName[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const dayOfWeek = date.getDay();

	return weekDayNames[dayOfWeek];
}

export const getDayOfMonth = (date: Date): number => {
	return date.getDate();
}

export const isCurrentDate = (date: Date): boolean => {
	const currentDate = new Date();

	return date.getFullYear() === currentDate.getFullYear() &&
		date.getMonth() === currentDate.getMonth() &&
		date.getDate() === currentDate.getDate();
}

export const isSameDate = (date1: Date, date2: Date): boolean => {

	return date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate();
}
