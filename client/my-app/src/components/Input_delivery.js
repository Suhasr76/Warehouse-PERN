import React,{Fragment,useState} from 'react'


const Input_delivery = () => {


    //const {id} = useParams()
    const [del_id,setdel_id]=useState("")
    const [destination,setdestination]=useState("")
    const [is_food,setis_food]=useState("")
    const [driver_id,setdriver_id]=useState("")
    const [mgr_id,setmgr_id]=useState("")
    const [truck_id,settruck_id]=useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/delivery/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    del_id:del_id,
                    destination:destination,
                    is_food:is_food,
                    driver_id:driver_id,
                    truck_id:truck_id,
                    mgr_id:mgr_id,
                    del_id:del_id
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
           <h1 className="text-center mt-5">delivery</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text" value={del_id} onChange={e=>setdel_id(e.target.value)} className="form-control" placeholder="del_id"/> 
                <input value={destination} onChange={e=>setdestination(e.target.value)} className="form-control" type="number" placeholder="destination"/>
                <input value={is_food} onChange={e=>setis_food(e.target.value)} className="form-control" type="number" placeholder="is_food"/>
                <input type="text" value={mgr_id} onChange={e=>setmgr_id(e.target.value)} className="form-control" placeholder="mgr_id"/>
                <input type="text" value={driver_id} onChange={e=>setdriver_id(e.target.value)} className="form-control" placeholder="driver_id" />
                <input type="text" value={truck_id} onChange={e=>settruck_id(e.target.value)} className="form-control" placeholder="truck_id" />
                <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_delivery

