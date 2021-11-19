import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import itemsFinder from '../apis/itemsFinder'

const Edititems = (props) => {
  const {id} = useParams()
  const [items_id,setitemsID]=useState("")
  const [quantity,setquantity]=useState("")
  const [weight,setweight]=useState("")
  const [del_id,setdel_id]=useState("")
  const [mgr_id,setmgr_id]=useState("")



  const handleSubmit = async (e) => {
    e.preventDefault()
    const updateditems = await itemsFinder.put(`/${id}`,{
    "item_id":items_id,
    "quantity":quantity,
    "weight":weight,
    "mgr_id":mgr_id,
    "del_id":del_id})
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="items-id">Item Id</label>
          <input type="text" value={items_id} onChange={e=>setitemsID(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="items-quantity">Quantity</label>
          <input value={quantity} onChange={e=>setquantity(e.target.value)} className="form-control" type="number"/>
        </div>    
        <div class="form-group">
          <label htmlFor="items-weight">Weight</label>
          <input value={weight} onChange={e=>setweight(e.target.value)} className="form-control" type="number"/>
        </div>
        <div class="form-group">
          <label htmlFor="mgr-id">Manager Id</label>
          <input type="text" value={mgr_id} onChange={e=>setmgr_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="del-id">Delivery Id</label>
          <input type="text" value={del_id} onChange={e=>setdel_id(e.target.value)} className="form-control" />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default Edititems