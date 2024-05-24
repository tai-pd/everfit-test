import {ReactNode} from "react";
import "./DateTitle.css"
import addIcon from "../../../../shared/icons/Group.svg"

interface DateTitleProps {
	children: ReactNode,
	addable?: boolean,
	highlight?: boolean
}

const DateTitle = ({children, addable, highlight}: DateTitleProps) => {
	return <div className={"dateTitle-container"}>
		<span className={"dateTitle-title" + (highlight && " dateColumn-title-highlight")}>{children}</span>
		{addable && <button className={"dateTitle-button"}>
			<img className={"dateTitle-icon"} src={addIcon} alt={"image"}/>
		</button>}
	</div>
}

export default DateTitle
