import { useState } from 'react'
import './App.css'
import { Button } from './components'
import { useFetch } from './hooks'

const url = 'https://api.nasa.gov/planetary/apod?api_key=lXCC9iJUM8GQmio13ZxGq450nR3NitXeH1YeVPPx'

interface Data {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
type DataArray = Data[];

function App() {
  const [count, setCount] = useState(0)
  const {data, error, loading} = useFetch<DataArray>(url)

  const countMore = () => {
    setCount((count) => count + 1)
  }

  
  return (
    <>
      <h1>Vite + React</h1> 
      <div className="card">
        <Button label= {'Count is: '+ count } parentMethod={countMore}  />
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
      <div className='divided-container'>
        <div>
          First API: NASA APIs
          <br>APOD: Astronomy Picture of the Day.</br>
        </div>
        <div>
          <ul>
            {data?.map((data) => (<li> {data.explanation} 
              <br> {data.hdurl}</br>
              </li>))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

