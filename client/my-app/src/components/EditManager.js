import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import managerFinder from '../apis/managerFinder'

const Editmanager = (props) => {
  const {id} = useParams()
  const [manager_id,setmanagerID]=useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedmanager = await managerFinder.put(`/${id}`,{
    "mgr_id":manager_id})
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="manager-id">manager_id</label>
          <input type="text" value={manager_id} onChange={e=>setmanagerID(e.target.value)} className="form-control" />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default Editmanager
