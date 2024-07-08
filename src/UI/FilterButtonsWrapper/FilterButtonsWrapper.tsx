import React from 'react'
import styles from './FilterButtonsWrapper.module.css'
const FilterButtonsWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.filterButtons}>{children}</div>
  )
}

export default FilterButtonsWrapper