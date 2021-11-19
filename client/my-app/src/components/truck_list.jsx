import React, {useEffect, useContext, useState} from 'react'
import truckFinder from '../apis/truckFinder'
import { truckContext } from '../context/truckContext'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import EditTruck from '../components/EditTruck'


const truck_list = (props) => {
    const [ truck,setTruck]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/truck')
                .then((response)=>{setTruck(response.data)});
                // setTruck(( response).data.data.truck);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        history.push(`/truck/${id}/update`);
    }


    const handleDelete = async (id) => {
        try{
            const response = await truckFinder.delete('http://localhost:5000/api/truck/'+id);
            setTruck( truck.filter(tru => {
                return tru["truck_id"] !== id
            } ))
        }
        catch(err) {

        }
    }

    function generateRow(rowDetails,key)
    {//<button className="btn btn-warning">Update</button>
        return (<tr key={key}>
            <td>{rowDetails["truck_id"]}</td>
            <td>{rowDetails["capacity"]}</td>
            <td>{rowDetails["is_ref"]}</td>
        <td><button onClick={() => handleUpdate(rowDetails["truck_id"])}className="btn btn-warning">Update</button></td>
            <td><button 
            onClick={()=>handleDelete(rowDetails["truck_id"])}
             className="btn btn-danger">Delete</button></td>
        </tr>)
    }

   

    return (
        <div className="list-group">
            <h3 classname="mt-15 mb-10">Details</h3>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Truck ID</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Is Ref</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {truck.map(generateRow)}
                </tbody>
            </table>
            
        </div>
    )
}

export default truck_list
