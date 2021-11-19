import React,{useState,createContext} from 'react';

export const foodContext = createContext();

export const foodContextProvider = props => {

    const [food,setfood] = useState([])

    return (
        <foodContext.Provider value={{food, setfood}}>
            {props.children}
        </foodContext.Provider>

    )

}