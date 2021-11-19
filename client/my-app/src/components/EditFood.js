import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import foodFinder from '../apis/foodFinder'

const Editfood = (props) => {
  const {id} = useParams()
  const [item_id,setitem_id]=useState("")
  const [is_ref,setis_ref]=useState("")
  const [name,setname]=useState("")
  const [exp_date,setexp_date]=useState("")



  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedfood = await foodFinder.put(`/${id}`,{
    "item_id":item_id,
    "is_ref":is_ref,
    "name":name,
    "exp_date":exp_date
    })
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="food-id">Item Id</label>
          <input type="text" value={item_id} onChange={e=>setitem_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="food-is_ref">is_ref</label>
          <input value={is_ref} onChange={e=>setis_ref(e.target.value)} className="form-control" />
        </div>    
        <div class="form-group">
          <label htmlFor="food-name">Name</label>
          <input value={name} onChange={e=>setname(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="food-exp_date">exp_date</label>
          <input value={exp_date} onChange={e=>setexp_date(e.target.value)} className="form-control" />
        </div>
        

        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default Editfood