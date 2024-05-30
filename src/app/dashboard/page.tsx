import React, { FC } from 'react'
import styles from './styles.module.scss'

const dashboard: FC = () => {
  return (
    <div className={`${styles.name} + ${styles.large_name}`}>
      DASHBOARD
      <div className={styles.second_name}></div>
    </div>
  )
}

export default dashboard