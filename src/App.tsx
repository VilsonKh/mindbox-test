import { useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import MainCard from "./UI/MainCard/MainCard";
import InputField from "./Components/InputField/InputField";
import TodoList from "./UI/TodoList/TodoList";
import ListItem from "./Components/ListItem/ListItem";
import Footer from "./UI/Footer/Footer";
import FilterButtonsWrapper from "./UI/FilterButtonsWrapper/FilterButtonsWrapper";
import ActiveItemsCounter from "./UI/ActiveItemsCounter/ActiveItemsCounter";
import Button from "./UI/Button/Button";
import Header from "./UI/Header/Header";
import type {Todo}  from "./types";

function App() {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const [activeFilter, setActiveFilter] = useState<undefined | "active" | "completed">(undefined);

	useEffect(() => {
		const savedTodoList = localStorage.getItem("todoList");
		if (savedTodoList) {
			setTodoList(JSON.parse(savedTodoList));
		}
	},[])


	function markAsCompleted(id: number) {
		setTodoList((prev) => {
			return prev.map((todo) => {
				if (todo.id === id) {
					return { ...todo, status: todo.status === "active" ? "completed" : "active" };
				}
				return todo;
			});
		});
	}

	function clearCompleted() {
		setTodoList(todoList.filter((todo) => todo.status === "active"));
		setActiveFilter(undefined);
	}

	function filteredTodos() {
		if (activeFilter === "active") {
			return todoList.filter((todo) => todo.status === "active");
		} else if (activeFilter === "completed") {
			return todoList.filter((todo) => todo.status === "completed");
		}
		return todoList;
	}

	const filteredList = useMemo(() => filteredTodos(), [todoList, activeFilter]);

	return (
		<MainCard>
			<Header />
			<InputField
				setTodoList={setTodoList}
			/>

			<TodoList>
				{filteredList.length > 0 ? (
					filteredList.map((todo) => (
						<ListItem
							key={todo.id}
							todo={todo}
							markAsCompleted={markAsCompleted}
						/>
					))
				) : (
					<p className={styles.emptyList}>List is empty</p>
				)}
			</TodoList>
			<Footer>
				<ActiveItemsCounter todoList={todoList} />
				<FilterButtonsWrapper>
					<Button
						children="All"
						onClickEvent={() => setActiveFilter(undefined)}
						isActive={activeFilter === undefined}
					/>
					<Button
						children="Active"
						onClickEvent={() => setActiveFilter("active")}
						isActive={activeFilter === "active"}
					/>
					<Button
						children="Completed"
						onClickEvent={() => setActiveFilter("completed")}
						isActive={activeFilter === "completed"}
					/>
				</FilterButtonsWrapper>
				<Button onClickEvent={clearCompleted}>Clear completed</Button>
			</Footer>
		</MainCard>
	);
}

export default App;
