import React,{useState,createContext} from 'react';

export const non_foodContext = createContext();

export const non_foodContextProvider = props => {

    const [non_food,setnon_food] = useState([])

    return (
        <non_foodContext.Provider value={{non_food, setnon_food}}>
            {props.children}
        </non_foodContext.Provider>

    )

}