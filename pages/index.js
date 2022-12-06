import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto SSG</title>
      </Head>
      <h1>Projeto SSG</h1>
      <a href='\users'>Abrir Usuários</a>
    </div>
  )
}
