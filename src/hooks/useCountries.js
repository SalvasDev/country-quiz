import { useState, useEffect } from 'react'
import getCountries from '../services/getCountries';

export function useCountries(flag) {


  const [ countries, setCountries ] = useState([])


  useEffect( () => { 
    getCountries().then(paises => setCountries(paises))
  }, [flag])


return {countries}
    
}




