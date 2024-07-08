import React from "react";
import styles from "./ListItemWrapper.module.css";
import {motion} from "framer-motion";
import type { Todo } from "../../types";
interface ListItemWrapperProps {
	children: React.ReactNode;
	todo: Todo
	markAsCompleted: (id: number) => void;
}

const ListItemWrapper = ({ children, todo, markAsCompleted }: ListItemWrapperProps) => {
	console.log(children)
	return (
		<motion.li
			className={`${styles.listItem} ${todo.status === "completed" ? styles.completed : ""}`}
			key={todo.id}
			onClick={() => markAsCompleted(todo.id)}
			initial={{opacity: 0, y: -20}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: 20}}
			transition={{duration: 0.2}}
		>
			{" "}
			{children}
		</motion.li>
	);
};

export default ListItemWrapper;
