'use client'

import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import WebApp from '@twa-dev/sdk'

const Dashboard: FC = () => {
  const [id, setId] = useState<number>(0)
  useEffect(() => {
    setId(WebApp.initDataUnsafe.user?.id || 0)
  }, [])
  return (
    <div className={`${styles.name} + ${styles.large_name}`}>
      DASHBOARD{id}
      <div className={styles.second_name}></div>
    </div>
  )
}

export default Dashboard