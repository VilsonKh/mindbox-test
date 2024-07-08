import React from "react";
import styles from "./ListItem.module.css";
import ListItemWrapper from "../ListItemWrapper/ListItemWrapper";
import completedIcon from "../../assets/ok.svg";
import type { Todo } from "../../types";
interface ListItemProps {
	todo: Todo
	markAsCompleted: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = React.memo(({ todo, markAsCompleted }) => {
	return (
		<ListItemWrapper
			todo={todo}
			markAsCompleted={markAsCompleted}
		>
			<div className={`${styles.listDecor}`}>
				{todo.status === "active" ? (
					""
				) : (
					<img
						className={styles.completedIcon}
						src={completedIcon}
						alt="completed"
					/>
				)}
			</div>
			<p className={styles.text}>{todo.userInput}</p>
		</ListItemWrapper>
	);
});

export default ListItem;
