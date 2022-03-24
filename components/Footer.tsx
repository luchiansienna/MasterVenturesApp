import styles from '../styles/Footer.module.css'

interface IFooter {
  children: React.ReactNode
}

export const Footer = ({ children }: IFooter) => {
  return (
    <footer className={styles.footer}>
        {children}
    </footer>
  )
}
