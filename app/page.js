import Image from 'next/image'
import styles from './page.module.css'
import Bible from '../components/Bible'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>PocketBible</h1>

      <Bible/>
      
    </main>
  )
}
