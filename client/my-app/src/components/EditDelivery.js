import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import deliveryFinder from '../apis/deliveryFinder'

const Editdelivery = (props) => {
  const {id} = useParams()
  const [del_id,setdel_id]=useState("")
  const [destination,setdestination]=useState("")
  const [is_food,setis_food]=useState("")
  const [driver_id,setdriver_id]=useState("")
  const [mgr_id,setmgr_id]=useState("")
  const [truck_id,settruck_id]=useState("")



  const handleSubmit = async (e) => {
    e.preventDefault()
    const updateddelivery = await deliveryFinder.put(`/${id}`,{
    "del_id":del_id,
    "destination":destination,
    "is_food":is_food,
    "mgr_id":mgr_id,
    "driver_id":driver_id,
    "truck_id":truck_id})
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="delivery-id">Delivery ID</label>
          <input type="text" value={del_id} onChange={e=>setdel_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="delivery-destination">Destination</label>
          <input value={destination} onChange={e=>setdestination(e.target.value)} className="form-control" type="number"/>
        </div>    
        <div class="form-group">
          <label htmlFor="delivery-is_food">Is_food</label>
          <input value={is_food} onChange={e=>setis_food(e.target.value)} className="form-control" type="number"/>
        </div>
        <div class="form-group">
          <label htmlFor="mgr-id">Driver Id</label>
          <input type="text" value={driver_id} onChange={e=>setdriver_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="mgr-id">Manager Id</label>
          <input type="text" value={mgr_id} onChange={e=>setmgr_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="del-id">Delivery Id</label>
          <input type="text" value={del_id} onChange={e=>setdel_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="del-id">Truck Id</label>
          <input type="text" value={truck_id} onChange={e=>settruck_id(e.target.value)} className="form-control" />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default Editdelivery