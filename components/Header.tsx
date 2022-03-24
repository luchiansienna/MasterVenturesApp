import React from 'react'
import styles from '../styles/Header.module.css'

interface IHeader {
  children?: React.ReactNode
}

function Header({ children }: IHeader) {
  return (
    <div className={styles.header}>
      <h1>{children}</h1>
    </div>
  )
}

export default Header
