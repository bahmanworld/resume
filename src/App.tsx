import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Bahman World 2022</h1>
      <br/>
      <button onClick={()=>{
        alert('button clicked')
      }}>Click here for more information on this site</button>
    </div>
  )
}

export default App
