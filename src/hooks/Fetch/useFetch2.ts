import { useState,useEffect } from "react";
import { useDebounce } from "./useDebounce";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Props<T>{
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export function useFetch2<T> (url: string): Props<T> {
  const [data, setData] = useState<Data<T>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>(null)
  const debouncedSearch = useDebounce{search};
  

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () =>{
    setLoading(true)
      try{
        const response = await fetch(url,controller, useDebounce)
        if (!response.ok) {
          throw new Error("Error al obtener datos")
        }
        const jsonData: T =await response.json()
        setData(jsonData)
        setError(null)
      }catch(err){
        setError(err as Error)
      }finally{
        setLoading(false)
      }
      
    }

    fetchData()

    return () => {
      controller.abort();
    }
    
    
  }, [url])

  return { data,loading,error}
  
}
