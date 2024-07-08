import { useEffect, useState } from "react";
import styles from "./InputField.module.css";
import { Todo } from "../../types";
interface InputFieldProps {
	setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const InputField: React.FC<InputFieldProps> = ({ setTodoList }) => {
	const [userInput, setUserInput] = useState<string>("");

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Enter" && userInput) {
				addTodoList();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [addTodoList]);

	function addTodoList() {
		const newTodoItem = { userInput, id: new Date().getTime(), status: "active" };
	
		const savedTodoList = localStorage.getItem("todoList");
		let todoList = [];
	
		if (savedTodoList) {
			todoList = JSON.parse(savedTodoList);
		}
	
		todoList.unshift(newTodoItem);
	
		localStorage.setItem("todoList", JSON.stringify(todoList));
	
		setTodoList(todoList);
		setUserInput("");
	}
	

	return (
		<input
			type="text"
			onInput={(e) => setUserInput(e.currentTarget.value)}
			value={userInput}
			placeholder="What needs to be done?"
			className={styles.input}		/>
	);
};

export default InputField;
