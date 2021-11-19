import React, {useEffect, useContext, useState} from 'react'
import non_foodFinder from '../apis/non_foodFinder'
import { non_foodContext } from '../context/non_foodContext'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Editnon_food from './EditNon_food'


const non_food_list = (props) => {
    const [ non_food,setnon_food]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/non_food')
                .then((response)=>{setnon_food(response.data)});
                // setnon_food(( response).data.data.non_food);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        history.push(`/non_food/${id}/update`);
    }


    const handleDelete = async (id) => {
        try{
            const response = await non_foodFinder.delete('http://localhost:5000/api/non_food/'+id);
            setnon_food( non_food.filter(tru => {
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
            <td>{rowDetails["category"]}</td>
            <td>{rowDetails["name"]}</td>
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
                        <th scope="col">Category</th>
                        <th scope="col">Name</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {non_food.map(generateRow)}
                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default non_food_list
