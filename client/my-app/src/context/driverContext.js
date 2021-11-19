import React,{useState,createContext} from 'react';

export const driverContext = createContext();

export const driverContextProvider = props => {

    const [driver,setdriver] = useState([])

    return (
        <driverContext.Provider value={{driver, setdriver}}>
            {props.children}
        </driverContext.Provider>

    )

}