import "./Table1x2.css"
import { useFetch } from '../../hooks'

const url = 'https://v2.jokeapi.dev/joke/Any?lang=es'

interface Props {
    error: boolean;
    category: string;
    type: string;
    joke: string;
    setup: string;
    delivery: string;
    flags: {
      nsfw: boolean;
      religious: boolean;
      political: boolean;
      racist: boolean;
      sexist: boolean;
      explicit: boolean;
    };
    safe: boolean;
    id: number;
    lang: string;
  }

export const JokeAPI = () => {
    const {data, error, loading} = useFetch<Props>(url)

    if(loading){
     return(
      <p>Loading...</p>
     )   
    }

    if(error) return <p>Error fetching data with JokesAPI: {error?.message }</p>

    return(
     <div className='divided-container'>
        <div>
          Second API: Joke's API
        </div>
        <div>
          <h2>{data?.category}</h2>
          <br/>the joke is: {data?.joke}<br/>
          <br/>{data?.setup}
          <br/>{data?.delivery}
        </div>
      </div>
    )

}