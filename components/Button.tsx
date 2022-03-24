import React, { Key, MouseEventHandler } from 'react'
import styles from '../styles/Button.module.css'

interface IButton {
  dataTestId?: Key | null | undefined
  isSubmitButton?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

function Button({ dataTestId, isSubmitButton, onClick, children }: IButton) {
  return (
    <button data-testid={`Button.${dataTestId}`} className={`${styles.button} ${isSubmitButton ? styles.submitButton : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button