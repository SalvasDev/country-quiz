import { useContext } from 'react'
import StaticContext from '../components/context/StaticContext'

export default function useReadFilled() {
  const {filled} = useContext(StaticContext)

return {filled}
    
}
