import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import Heading from './Heading'
import Paragraph from './Paragraph'
import CounterLabel from './CounterLabel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading />
      <Paragraph />
      <HelloWorld name={`Edward`} />
      <div className="card">
        <CounterLabel counter={count} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
