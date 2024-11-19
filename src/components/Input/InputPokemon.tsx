

interface Props {
    value: string;
    onChange: (enter: React.ChangeEvent<HTMLInputElement>) => void;
 }

export const InputPokemon = ({ onChange, value}:Props) => {
    return (
      <>
          <label htmlFor="pokemon">Name or ID of a Pokemon</label>
          <input 
          type="text" 
          id="pokemon" 
          placeholder="Example: Pikachu" 
          value = {value}
          onChange={onChange}
          />
      </>
    )
  }