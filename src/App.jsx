import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch("/api/v1")
      .then(data => data.json())
      .then(data => setRes(data))
  }, []);

  return (
    <div>{JSON.stringify(res)}Hi World</div>
  )
}

export default App
