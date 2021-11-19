import React, {useEffect,  useState} from 'react'
import managerFinder from '../apis/managerFinder'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const manager_list = (props) => {
    const [ Manager,setManager]=useState([]);
    let history = useHistory();
    useEffect(()=>{
        const fetchData = async() => {
            try{
                axios.get('http://localhost:5000/api/manager')
                .then((response)=>{setManager(response.data)});
                // setmanager(( response).data.data.manager);
               
            }catch(err){
    
            }
           
        };
        fetchData();
    },[])


    const handleUpdate = (id) => {
        let temp = console.log(id.slice(1,id.length))
        if ( '#' in {id}){
            history.push(`/manager/${temp}/update`);}
        else{
            history.push(`/manager/${id}/update`);
        }    
    }


    const handleDelete = async (id) => {
        try{
            const response = await managerFinder.delete('http://localhost:5000/api/manager/'+id);
            setManager( Manager.filter(tru => {
                return tru["mgr_id"] !== id
            } ))
        }
        catch(err) {

        }
    }

    function generateRow(rowDetails,key)
    {//<button className="btn btn-warning">Update</button>
        return (<tr key={key}>
            <td>{rowDetails["mgr_id"]}</td>
        <td><button onClick={() => handleUpdate(rowDetails["mgr_id"])}className="btn btn-warning">Update</button></td>
            <td><button 
            onClick={()=>handleDelete(rowDetails["mgr_id"])}
             className="btn btn-danger">Delete</button></td>
        </tr>)
    }

   

    return (
        <div className="list-group">
            <h3 classname="mt-15 mb-10">Details</h3>
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Manager ID</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {Manager.map(generateRow)}
                </tbody>
            </table>
            
        </div>
    )
}

export default manager_list
