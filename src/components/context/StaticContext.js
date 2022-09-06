import React, {useState} from 'react'

const Context = React.createContext({})

export function HitsContextProvider ({children}) {
    const [ hits, setHits ] = useState(0)

    return (
    
    <Context.Provider value={{hits, setHits}}>
        {children}
    </Context.Provider>
    )

}


export default Context