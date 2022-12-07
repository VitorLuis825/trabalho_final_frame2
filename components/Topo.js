import Link from 'next/link'

import styles from '../styles/Header.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
            <span>Nícolas Kurz Chimenes Silva</span>
        </nav>
      </header>
    </div>
  )
}