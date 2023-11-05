import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/app/components/Header'
import Description from '@/app/components/Description'



export default function Home() {
  return (
    <main /*className={styles.main}*/>
      <p>hello world</p>
      <Header text="From main"/>
      <Description />
    </main>
  )
}
