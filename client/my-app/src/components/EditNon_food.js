import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import non_foodFinder from '../apis/non_foodFinder'

const Editnon_food = (props) => {
  const {id} = useParams()
  const [item_id,setitem_id]=useState("")
  const [category,setcategory]=useState("")
  const [name,setname]=useState("")



  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatednon_food = await non_foodFinder.put(`/${id}`,{
    "item_id":item_id,
    "category":category,
    "name":name,
    })
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="non_food-id">Item Id</label>
          <input type="text" value={item_id} onChange={e=>setitem_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="non_food-category">Category</label>
          <input value={category} onChange={e=>setcategory(e.target.value)} className="form-control" />
        </div>    
        <div class="form-group">
          <label htmlFor="non_food-name">Name</label>
          <input value={name} onChange={e=>setname(e.target.value)} className="form-control" />
        </div>
        

        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default Editnon_food