//import { useState } from 'react'
import "./Table1x2.css"
import { useFetch } from '../../hooks'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

//const url = `http://ipwho.is/${ipAddress}`
const url = `http://ipwho.is/181.199.54.198`

// const [target,setTarget] = ("")
// const [ipAddress,setipaddress] = useState("")

// const handleChange = ({ target }) => {
//   setipaddress(target.value);
// }


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
  flag: { 
    img: string;
    emoji: string;
    emoji_unicode: string;
  };
  connection: {
    asn: number;
    org: string;
    isp: string;
    domain: string;
  };
  timezone: {
    id: string;
    abbr: string;
    is_dst: boolean;
    offset: number;
    utc: string;
    current_time: string;
  };
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
          Third API: GeoIp APIs

        </div>
        <div>
              <h2>{data?.ip || <Skeleton />}</h2>
              <br/>{data?.success || <Skeleton/>}
              <p>{data?.country || <Skeleton count={10}/>}</p>

            </div>
      </div>
    )

}