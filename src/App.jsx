import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Lorem ipsum dolor sit amet.</p>  
      <input type="text" placeholder='typing....' />      
    </div>
  )
}

export default App
