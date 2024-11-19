import "./Table1x2.css"
import { useFetch } from '../../hooks'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const url = 'https://api.nasa.gov/planetary/apod?api_key=lXCC9iJUM8GQmio13ZxGq450nR3NitXeH1YeVPPx-ajaa'

interface Props{
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export const NasaAPI = () => {
    const {data, error, loading} = useFetch<Props>(url)

    if(loading){
     return(
      <p>Loading...</p>
     )   
    }

    //if(error) return <p>Error fetching data with NasaAPI: {error?.message }</p>

    if(error) return (
    <div className='divided-container'>
     <div>
      First API: NASA APIs
      <br/>APOD: Astronomy Picture of the Day.<br/>
     </div >
     <div
      style={{
        border: '1px solid #ccc',
        display: 'block',
        lineHeight: 2,
        padding: '1rem',
        marginBottom: '0.5rem',
        width: 100,
      }}
    >
     <p>
      <Skeleton count={10} />
    </p>
    </div>
    </div>)

    return(
      <div className='divided-container'>
        <div>
          First API: NASA APIs
          <br/>APOD: Astronomy Picture of the Day.<br/>
        </div>
        
        <div>
              <h2>{data?.title || <Skeleton />}</h2>
              <p>{data?.explanation || <Skeleton count={10}/>}</p>
              {data?.hdurl && <img src={data.hdurl} alt={data.title} style={{ maxWidth: '100%' }} />}
            </div>
      </div>
    )

}