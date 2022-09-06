import { useState, useEffect } from 'react'
import getCountries from '../services/getCountries';



export function useCountries(times) {

    const [ countries, setCountries ] = useState([])

    useEffect( () => { 
      getCountries().then(paises => setCountries(paises))

    }, [times])


  return {countries}
    
}




