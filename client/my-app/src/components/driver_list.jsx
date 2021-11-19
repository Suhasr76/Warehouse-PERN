import React, {useEffect,  useState} from 'react'
import driverFinder from '../apis/driverFinder'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const driver_list = (props) => {
    const [ driver,setdriver]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/driver')
                .then((response)=>{setdriver(response.data)});
                // setdriver(( response).data.data.driver);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        let temp = console.log(id.slice(1,id.length))
        if ( '#' in {id}){
            history.push(`/driver/${temp}/update`);}
        else{
            history.push(`/driver/${id}/update`);
        }    
    }


    const handleDelete = async (id) => {
        try{
            const response = await driverFinder.delete('http://localhost:5000/api/driver/'+id);
            setdriver( driver.filter(tru => {
                return tru["driver_id"] !== id
            } ))
        }
        catch(err) {

        }
    }

    function generateRow(rowDetails,key)
    {//<button className="btn btn-warning">Update</button>
        return (<tr key={key}>
            <td>{rowDetails["driver_id"]}</td>
        <td><button onClick={() => handleUpdate(rowDetails["driver_id"])}className="btn btn-warning">Update</button></td>
            <td><button 
            onClick={()=>handleDelete(rowDetails["driver_id"])}
             className="btn btn-danger">Delete</button></td>
        </tr>)
    }

   

    return (
        <div className="list-group">
            <h3 classname="mt-15 mb-10">Details</h3>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">driver ID</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {driver.map(generateRow)}
                </tbody>
            </table>
            
        </div>
    )
}

export default driver_list
