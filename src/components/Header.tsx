import styles from './Header.module.css'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className={styles.header}>
      <Logo
        xlinkTitle="Todo List App"
        style={{ width: '7.875rem', height: '3rem' }}
      />
    </header>
  )
}
