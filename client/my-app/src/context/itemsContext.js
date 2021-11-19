import React,{useState,createContext} from 'react';

export const itemsContext = createContext();

export const itemsContextProvider = props => {

    const [items,setitems] = useState([])

    return (
        <itemsContext.Provider value={{items, setitems}}>
            {props.children}
        </itemsContext.Provider>

    )

}