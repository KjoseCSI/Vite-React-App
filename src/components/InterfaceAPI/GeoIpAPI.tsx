import "./Table1x2.css"
import { useFetch } from '../../hooks'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const url = `http://ipwho.is/${IPaddress}`

interface Flag {
  img: string;
  emoji: string;
  emoji_unicode: string;
}

interface Connection {
  asn: number;
  org: string;
  isp: string;
  domain: string;
}

interface Timezone {
  id: string;
  abbr: string;
  is_dst: boolean;
  offset: number;
  utc: string;
  current_time: string;
}

interface IPResponse {
  ip: string;
  success: boolean;
  type: string;
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  is_eu: boolean;
  postal: string;
  calling_code: string;
  capital: string;
  borders: string;
  flag: Flag;
  connection: Connection;
  timezone: Timezone;
}

export const GeoIpAPI = () => {
    const {data, error, loading} = useFetch<IPResponse>(url)

    if(loading){
     return(
      <p>Loading...</p>
     )   
    }

    if(error) return <p>Error fetching data with NasaAPI: {error?.message }</p>

    return(
      <div className='divided-container'>
        <div>
          First API: NASA APIs
          <br/>APOD: Astronomy Picture of the Day.<br/>
        </div>
        
        <div>
              <h2>{data?.ip || <Skeleton />}</h2>
              <br/>{data?.success || <Skeleton/>}
              <p>{data?.country || <Skeleton count={10}/>}</p>

            </div>
      </div>
    )

}