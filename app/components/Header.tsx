type HeaderParams ={
    text:string;
  }
  
  
  function Header(props:HeaderParams){
    return <h1>{props.text}</h1>
  }
  export default Header