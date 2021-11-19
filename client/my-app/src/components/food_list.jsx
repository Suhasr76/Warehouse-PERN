import React, {useEffect, useContext, useState} from 'react'
import foodFinder from '../apis/foodFinder'
import { foodContext } from '../context/foodContext'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Editfood from './EditFood'


const food_list = (props) => {
    const [ food,setfood]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/food')
                .then((response)=>{setfood(response.data)});
                // setfood(( response).data.data.food);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        history.push(`/food/${id}/update`);
    }


    const handleDelete = async (id) => {
        try{
            const response = await foodFinder.delete('http://localhost:5000/api/food/'+id);
            setfood( food.filter(tru => {
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
            <td>{rowDetails["is_ref"]}</td>
            <td>{rowDetails["name"]}</td>
            <td>{rowDetails["exp_date"]}</td>
        <td><button onClick={() => handleUpdate(rowDetails["item_id"])}className="btn btn-warning">Update</button></td>
            <td><button 
            onClick={()=>handleDelete(rowDetails["item_id"])}
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
                        <th scope="col">Item Id</th>
                        <th scope="col">Is_ref</th>
                        <th scope="col">Name</th>
                        <th scope="col">Expiry Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {food.map(generateRow)}
                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default food_list
