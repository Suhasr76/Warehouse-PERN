import React,{useState,createContext} from 'react';

export const deliveryContext = createContext();

export const deliveryContextProvider = props => {

    const [delivery,setdelivery] = useState([])

    return (
        <deliveryContext.Provider value={{delivery, setdelivery}}>
            {props.children}
        </deliveryContext.Provider>

    )

}