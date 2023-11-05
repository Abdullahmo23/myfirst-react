import Image from 'next/image'
import styles from './page.module.css'

type HeaderParams ={
  text:string;
}


function Header(props:HeaderParams){
  return <h1>{props.text}</h1>
}

function List(){
  return <p>A list of details</p>
}

function Description(){
  return (
    <>
    <div>Description</div>
    <List />
    </>
  )
}

export default function Home() {
  return (
    <main /*className={styles.main}*/>
      <p>hello world</p>
      <Header text="From main"/>
      <Description />
    </main>
  )
}
