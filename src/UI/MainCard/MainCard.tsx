import React from 'react'
import styles from './MainCard.module.css'
const MainCard = ({children} : {children: React.ReactNode}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default MainCard