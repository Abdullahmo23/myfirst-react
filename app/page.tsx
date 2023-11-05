'use client';
import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/app/components/Header'
import Description from '@/app/components/Description'
import About from '@/app/About/page'
import { useEffect, useRef, useState } from 'react'




export default function Home() {
  let [counter,setCounter]= useState(0);
  const [success , setSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  let handelClick = () => {
    
    if(inputRef.current){
      inputRef.current.focus()
    }
    
    setCounter(counter + 1)
    if(counter ===10){
      setSuccess(true)
    }
      console.log(counter)

  }

  useEffect(()=> {
    console.timeLog("# Event is success!")
  },[success])
  
  useEffect(()=>{
    console.log("## counter is triggerd")
  },[counter])
  return (
    <main /*className={styles.main}*/>
      <div className={styles.section}>
      <p>hello world</p>
      <div>counter: {counter}</div>
      <input ref={inputRef}/>
      <button onClick={handelClick}>increase counter</button>
      <Header text="From main"/>
      <Description />
      <About/> 

      </div>
      <Link href="/About">GO to About </Link>
    </main>
  )
}
