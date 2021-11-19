import React,{useState,createContext} from 'react';

export const employeesContext = createContext();

export const employeesContextProvider = props => {

    const [employees,setemployees] = useState([])

    return (
        <employeesContext.Provider value={{employees, setemployees}}>
            {props.children}
        </employeesContext.Provider>

    )

}