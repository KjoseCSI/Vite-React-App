import { useFetch } from "../../hooks";
import Skeleton from "react-loading-skeleton";


const url = "https://dog.ceo/api/breeds/image/random"

interface Props {
  message: string;
  status:  string;
}


export default function DogsAPI() {

  const {data, error, loading} = useFetch<Props>(url)
  


  if (loading) {
    return(
      <p>Loading..</p>
    )
  }
  if (error) {
    return(
      <p>
        <Skeleton count={10}/>
      </p>
    )
    
  }


  return (
    <>
    <h3>Dogs API</h3>
    <img src={data?.message}/>
    </>
  )
}
