import React, {useEffect, useContext, useState} from 'react'
import itemsFinder from '../apis/itemsFinder'
import { itemsContext } from '../context/itemsContext'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Edititems from './EditItems'


const items_list = (props) => {
    const [ items,setitems]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/items')
                .then((response)=>{setitems(response.data)});
                // setitems(( response).data.data.items);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        history.push(`/items/${id}/update`);
    }


    const handleDelete = async (id) => {
        try{
            const response = await itemsFinder.delete('http://localhost:5000/api/items/'+id);
            setitems( items.filter(tru => {
                return tru["item_id"] !== id
            } ))
        }
        catch(err) {

        }
    }

    function generateRow(rowDetails,key)
    {//<button className="btn btn-warning">Update</button>
        return (<tr key={key}>
            <td>{rowDetails["item_id"]}</td>
            <td>{rowDetails["quantity"]}</td>
            <td>{rowDetails["weight"]}</td>
            <td>{rowDetails["mgr_id"]}</td>
            <td>{rowDetails["del_id"]}</td>
        <td><button onClick={() => handleUpdate(rowDetails["item_id"])}className="btn btn-warning">Update</button></td>
            <td><button 
            onClick={()=>handleDelete(rowDetails["item_id"])}
             className="btn btn-danger">Delete</button></td>
        </tr>)
    }

   

    return (
        <div className="list-group">
            <h3 classname="mt-15 mb-10">Details</h3>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Items ID</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Manager Id</th>
                        <th scope="col">Delivery Id</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(generateRow)}
                </tbody>
            </table>
            
        </div>
    )
}

export default items_list
