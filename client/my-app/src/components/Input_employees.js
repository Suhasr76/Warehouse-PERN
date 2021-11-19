import React,{Fragment,useState} from 'react'


const Input_employees = () => {

    const [emp_id,setemp_id]=useState("")
    const [emp_name,setemp_name]=useState("")
    const [phone_no,setphone_no]=useState("")
    const [role,setrole]=useState("")
    const [driver_id,setdriver_id]=useState("")
    const [mgr_id,setmgr_id]=useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/employees/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    emp_id:emp_id,
                    emp_name:emp_name,
                    phone_no:phone_no,
                    role:role,
                    mgr_id:mgr_id,
                    driver_id:driver_id
                })
                    
            });
            //console.log(response);
        }

        catch(err){
            console.error(err.message);
        }

    }
   

    return (


        

       <Fragment>
           <h1 className="text-center mt-5">Employees</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text" value={emp_id} onChange={e=>setemp_id(e.target.value)} className="form-control" placeholder="emp_id"/> 
                <input value={emp_name} onChange={e=>setemp_name(e.target.value)} className="form-control"  placeholder="emp_name"/>
                <input value={phone_no} onChange={e=>setphone_no(e.target.value)} className="form-control"  placeholder="phone_no"/>
                <input value={role} onChange={e=>setrole(e.target.value)} className="form-control"  placeholder="role"/>
                <input type="text" value={mgr_id} onChange={e=>setmgr_id(e.target.value)} className="form-control" placeholder="mgr_id"/>
                <input type="text" value={driver_id} onChange={e=>setdriver_id(e.target.value)} className="form-control" placeholder="driver_id" />
                <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_employees

