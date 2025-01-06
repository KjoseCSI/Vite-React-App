import { useState } from 'react'
import './App.css'
import { Button,NasaAPI,JokeAPI, GeoIpAPI,InputPokemon, PokemonList, BlackButton } from './components'
import { useInput, useSearchPokemon, useDebounce} from './hooks' 
import DogsAPI from './components/InterfaceAPI/DogsAPI'
import { CustomForm } from './components/CustomForm/CustomForm'


function App() {
  const [count, setCount] = useState(0)

  const [value, onChange] = useInput();
  const debouncedValue = useDebounce(value, 1000);
  const {isLoading, pokemon} = useSearchPokemon(debouncedValue);
  const [key,setKey] = useState(0)

  const handleReload =() =>{
    setKey(prevKey =>prevKey+1)
  }


  const countMore = () => {
    setCount((count) => count + 1)
  }
  


  return (
    <>
      <div className="card">
        <Button parentMethod={countMore}> <BlackButton> El conteo es : {count} </BlackButton> </Button>
        <p>
        Pruebas para consumo de api y aplicaciones varias 
        </p>
        <p>
        Tests for API consumption and various applications
        </p>
      </div>
      <NasaAPI/>
      <div>------------------------------------------------------------</div>
      <div>
      <JokeAPI/>
        
      </div>
      <div>------------------------------------------------------------</div>
      <GeoIpAPI/>
      <div>------------------------------------------------------------</div>
      <DogsAPI key={key}/>
      <Button parentMethod={handleReload}> 
        <BlackButton>Recargar imagen de perro</BlackButton>  
      </Button>
      <div>------------------------------------------------------------</div>
      <div className="container">
        <h1> <span>Search Engine</span> whit <span>Debounce Effect</span> </h1>
      </div>
      <InputPokemon {...{value, onChange}}/>
      {
        isLoading
        ?<span>Loading Results</span>
        :<PokemonList pokemon = {pokemon}/>
      }
      <div>------------------------------------------------------------</div>
      <CustomForm/>
    </>
  )
}

export default App

