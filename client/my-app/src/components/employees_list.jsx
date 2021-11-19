import React, {useEffect, useContext, useState} from 'react'
import employeesFinder from '../apis/employeesFinder'
import { employeesContext } from '../context/employeesContext'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Editemployees from './EditEmployees'


const employees_list = (props) => {
    const [ employees,setemployees]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/employees')
                .then((response)=>{setemployees(response.data)});
                // setemployees(( response).data.data.employees);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        history.push(`/employees/${id}/update`);
    }


    const handleDelete = async (id) => {
        try{
            const response = await employeesFinder.delete('http://localhost:5000/api/employees/'+id);
            setemployees( employees.filter(tru => {
                return tru["emp_id"] !== id
            } ))
        }
        catch(err) {

        }
    }

    function generateRow(rowDetails,key)
    {//<button className="btn btn-warning">Update</button>
        return (<tr key={key}>
            <td>{rowDetails["emp_id"]}</td>
            <td>{rowDetails["emp_name"]}</td>
            <td>{rowDetails["phone_no"]}</td>
            <td>{rowDetails["role"]}</td>
            <td>{rowDetails["mgr_id"]}</td>
            <td>{rowDetails["driver_id"]}</td>
        <td><button onClick={() => handleUpdate(rowDetails["emp_id"])}className="btn btn-warning">Update</button></td>
            <td><button 
            onClick={()=>handleDelete(rowDetails["emp_id"])}
             className="btn btn-danger">Delete</button></td>
        </tr>)
    }

   

    return (
        <div>
        <h3 classname="mt-15 mb-10">Details</h3>
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Role</th>
                        <th scope="col">Manager Id</th>
                        <th scope="col">Driver Id</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map(generateRow)}
                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default employees_list
