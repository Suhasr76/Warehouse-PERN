import React, {useEffect, useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import employeesFinder from '../apis/employeesFinder'

const Editemployees = (props) => {
  const {id} = useParams()
  const [emp_id,setemp_id]=useState("")
  const [emp_name,setemp_name]=useState("")
  const [phone_no,setphone_no]=useState("")
  const [role,setrole]=useState("")
  const [driver_id,setdriver_id]=useState("")
  const [mgr_id,setmgr_id]=useState("")



  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedemployees = await employeesFinder.put(`/${id}`,{
    "emp_id":emp_id,
    "emp_name":emp_name,
    "phone_no":phone_no,
    "role":role,
    "mgr_id":mgr_id,
    "driver_id":driver_id})
  }

  return (
    <div>
      <form action ="">
        <div class="form-group">
          <label htmlFor="employees-id">Employee Id</label>
          <input type="text" value={emp_id} onChange={e=>setemp_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="employees-emp_name">emp_name</label>
          <input value={emp_name} onChange={e=>setemp_name(e.target.value)} className="form-control" type="number"/>
        </div>    
        <div class="form-group">
          <label htmlFor="employees-phone_no">phone_no</label>
          <input value={phone_no} onChange={e=>setphone_no(e.target.value)} className="form-control" type="number"/>
        </div>
        <div class="form-group">
          <label htmlFor="mgr-id">Role</label>
          <input type="text" value={role} onChange={e=>setrole(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="mgr-id">Manager Id</label>
          <input type="text" value={mgr_id} onChange={e=>setmgr_id(e.target.value)} className="form-control" />
        </div>
        <div class="form-group">
          <label htmlFor="del-id">Delivery Id</label>
          <input type="text" value={driver_id} onChange={e=>setdriver_id(e.target.value)} className="form-control" />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-warning">Submit</button>
      </form>
    </div>
  )
}

export default Editemployees