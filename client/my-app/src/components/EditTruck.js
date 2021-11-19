import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import truckFinder from '../apis/truckFinder'

const EditTruck = (props) => {
  const {id} = useParams()
  const [truck_id,setTruckID]=useState("")
  const [cap,setCap]=useState("")
  const [is_ref,setIsRef]=useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedTruck = await truckFinder.put(`/${id}`,{
    "truck_id":truck_id,
    "capacity":cap,
    "is_ref":is_ref})
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="truck-id">Truck_id</label>
          <input type="text" value={truck_id} onChange={e=>setTruckID(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="truck-capacity">Capacity</label>
          <input value={cap} onChange={e=>setCap(e.target.value)} className="form-control" type="number"/>
        </div>
        <div class="form-group">
          <label htmlFor="truck-isref" >Is_ref</label>
          <input value={is_ref} onChange={e=>setIsRef(e.target.value)}className="form-control" type="text"/>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default EditTruck
