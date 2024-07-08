
import type { Todo } from '../../types';
import styles from './ActiveItemsCounter.module.css'

interface ActiveItemsCounterProps {
  todoList: Todo[]
}

const ActiveItemsCounter: React.FC<ActiveItemsCounterProps> = ({todoList}) => {
  function countActiveTodos() {
		return todoList.filter((todo) => todo.status === "active").length;
	}

  const configureText = countActiveTodos() === 1 ? "item" : "items";

  return (
		<p className={styles.counter}>{countActiveTodos()} {configureText} left</p>
  )
}

export default ActiveItemsCounter