import { useState } from 'react'
import Avatar from './assets/avatar.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={Avatar} style={{width: 200, height: 200, borderRadius: 250}} />
      <h1>Bahman World 2022</h1>
      <br/>
      <br/>
      <a href='mailto:bahman.world@gmail.com'>Mail Me Now</a>
      <br/>
      <br/>
      <a href='tel:+989367036819'>Call Me</a>
    </div>
  )
}
export default App
