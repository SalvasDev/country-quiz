import React, {useState} from 'react'

const Context = React.createContext({})

export function NextContextProvider ({children}) {
    const [ filled, setFilled ] = useState(false)

    return (
    
    <Context.Provider value={{filled, setFilled}}>
        {children}
    </Context.Provider>
    )

}


export default Context