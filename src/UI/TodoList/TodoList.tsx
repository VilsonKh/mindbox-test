import React from 'react'

import styles from './TodoList.module.css'

const TodoList = ({children} : {children: React.ReactNode}) => {
  console.log(children)
  return (
    <ul className={styles.list}>{children}</ul>
  )
}

export default TodoList