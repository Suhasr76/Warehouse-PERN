import React, {useEffect, useContext, useState} from 'react'
import deliveryFinder from '../apis/deliveryFinder'
import { deliveryContext } from '../context/deliveryContext'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Editdelivery from './EditDelivery'


const delivery_list = (props) => {
    const [ delivery,setdelivery]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/delivery')
                .then((response)=>{setdelivery(response.data)});
                // setdelivery(( response).data.data.delivery);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        history.push(`/delivery/${id}/update`);
    }


    const handleDelete = async (id) => {
        try{
            const response = await deliveryFinder.delete('http://localhost:5000/api/delivery/'+id);
            setdelivery( delivery.filter(tru => {
                return tru["del_id"] !== id
            } ))
        }
        catch(err) {

        }
    }

    function generateRow(rowDetails,key)
    {//<button className="btn btn-warning">Update</button>
        return (
        <tr key={key}>
            <td>{rowDetails["del_id"]}</td>
            <td>{rowDetails["destination"]}</td>
            <td>{rowDetails["is_food"]}</td>
            <td>{rowDetails["mgr_id"]}</td>
            <td>{rowDetails["driver_id"]}</td>
            <td>{rowDetails["truck_id"]}</td>
        <td><button onClick={() => handleUpdate(rowDetails["del_id"])}className="btn btn-warning">Update</button></td>
            <td><button 
            onClick={()=>handleDelete(rowDetails["del_id"])}
             className="btn btn-danger">Delete</button></td>
        </tr>)
    }

   

    return (
        <div className="list-group">
            <h3 classname="mt-15 mb-10">Details</h3>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Delivery ID</th>
                        <th scope="col">desyination</th>
                        <th scope="col">is_food</th>
                        <th scope="col">Manager Id</th>
                        <th scope="col">Driver Id</th>
                        <th scope="col">Truck Id</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {delivery.map(generateRow)}
                </tbody>
            </table>
            
        </div>
    )
}

export default delivery_list
