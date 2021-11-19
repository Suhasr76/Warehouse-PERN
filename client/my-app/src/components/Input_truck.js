import React,{Fragment,useState} from 'react'


const Input_truck = () => {


    const [truck_id, set_truck_id] = useState("");
    const [capacity, set_capacity] = useState("");
    const [isref, set_isref] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/truck/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    truck_id:truck_id,
                    capacity:capacity,
                    is_ref:isref
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
           <h1 className="text-center mt-5">Truck</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex mt-10" onSubmit={handleSubmit}>
               <input value = {truck_id} onChange={e => set_truck_id(e.target.value)} type="text"
                className="Driver-id" placeholder="truck id"/ >  
               <input value = {capacity} onChange={e => set_capacity(e.target.value)} type="number" 
               className="truck_capacity" placeholder="capacity"/ >  
               <input value = {isref} onChange={e => set_isref(e.target.value)} type="text" 
               className="isref_or_ref" placeholder="is ref"/ >  
               <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_truck

