import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import driverFinder from '../apis/driverFinder'

const Editdriver = (props) => {
  const {id} = useParams()
  const [driver_id,setdriverID]=useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    const updateddriver = await driverFinder.put(`/${id}`,{
    "driver_id":driver_id})
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="driver-id">driver_id</label>
          <input type="text" value={driver_id} onChange={e=>setdriverID(e.target.value)} className="form-control" />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default Editdriver
