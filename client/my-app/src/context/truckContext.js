import React,{useState,createContext} from 'react';

export const truckContext = createContext();

export const truckContextProvider = props => {

    const [truck,setTruck] = useState([])

    return (
        <truckContext.Provider value={{truck, setTruck}}>
            {props.children}
        </truckContext.Provider>

    )

}
