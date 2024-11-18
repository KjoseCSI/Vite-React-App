import { useState } from 'react'
import './App.css'
import { Button,NasaAPI,JokeAPI } from './components'


function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count) => count + 1)
  }
  
  return (
    <>
      <h1>Vite + React</h1> 
      <div className="card">
        <Button label= {`Count is: ${count}`} parentMethod={countMore}  />
        <p></p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
        Pruebas para consumo de api y aplicaciones varias 
        </p>
        <p>
        Tests for API consumption and various applications
        </p>
      </div>
      <NasaAPI/>
      <div>------------------------------------------------------------</div>
      <JokeAPI/>
    </>
  )
}

export default App

