import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Topo from '../components/Topo'
import Base from '../components/Base'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prova de Frameworks 2 - Nícolas Kurz Chimenes Silva</title>
      </Head>

      <Topo/>
      
      <div className={styles.container_content}>
        <h1>Projeto SSG</h1>
        <a href='\users'>Abrir Usuários</a>
      </div>

      <Base/>
    </>
  )
}