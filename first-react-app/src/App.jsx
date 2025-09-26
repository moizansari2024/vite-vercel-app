import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 10)
  }


  const decrease = () => {
    if (count > 0) {
      setCount(count - 10)
    }
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase value</button>
      <button onClick={decrease}>decrease value</button>
    </div>
  )
}

export default App
