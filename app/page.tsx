'use client';
import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/app/components/Header'
import Description from '@/app/components/Description'
import About from '@/app/About/page'
import { useState } from 'react'




export default function Home() {
  let [counter,setCounter]= useState(0);

  let handelClick = () => {
    setCounter(counter + 1)
      console.log(counter)

  }
  return (
    <main /*className={styles.main}*/>
      <div className={styles.section}>
      <p>hello world</p>
      <div>counter: {counter}</div>
      <button onClick={handelClick}>increase counter</button>
      <Header text="From main"/>
      <Description />
      <About/> 

      </div>
      <Link href="/About">GO to About </Link>
    </main>
  )
}
