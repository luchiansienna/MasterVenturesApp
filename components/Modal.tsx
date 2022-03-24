import { MouseEventHandler } from 'react'
import styles from '../styles/Modal.module.css'
import { AiOutlineClose } from 'react-icons/ai'

interface IModal {
  handleClose: MouseEventHandler<HTMLAnchorElement>
  show: Boolean | undefined
  children: React.ReactNode
}

export const Modal = ({ handleClose, show, children }: IModal) => {
  const showHideClassName = show
    ? `${styles.modal} ${styles.displayBlock}`
    : `${styles.modal} ${styles.displayNone}`

  return (
    <div className={showHideClassName}>
      <section className={styles.modalMain}>
        {children}
        <a
          className={styles.modalCloseButton}
          onClick={handleClose}
        >
          <AiOutlineClose size={40} />
        </a>
      </section>
    </div>
  )
}
