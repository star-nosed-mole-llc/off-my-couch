import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  /*
  This method on the App react componenet tests a fetch request to the server and logs the response
  */
  // const logFromServer = async () => {
  //   const response = await fetch('/testing');
  //   const logThis = await response.json();
  //   console.log(logThis);
  // }

  return (
    <div className = 'App'>
      <h1>HELLOOOO</h1>
      {/* <button onClick = {()=>logFromServer()}>Click me to log from server</button> */}
    </div>
    
  )
}

export default App
