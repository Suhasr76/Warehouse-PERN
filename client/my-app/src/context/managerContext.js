import React,{useState,createContext} from 'react';

export const managerContext = createContext();

export const managerContextProvider = props => {

    const [manager,setmanager] = useState([])

    return (
        <managerContext.Provider value={{manager, setmanager}}>
            {props.children}
        </managerContext.Provider>

    )

}