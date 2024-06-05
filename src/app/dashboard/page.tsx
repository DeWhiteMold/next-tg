import React, { FC } from 'react'
import styles from './styles.module.scss'
import WebApp from '@twa-dev/sdk'

const dashboard: FC = () => {
  return (
    <div className={`${styles.name} + ${styles.large_name}`}>
      DASHBOARD{WebApp.initDataUnsafe.user?.id}
      <div className={styles.second_name}></div>
    </div>
  )
}

export default dashboard