import React,{Fragment,useState} from 'react'


const Input_driver = () => {


    const [driver_id, set_driver_id] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/driver/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    driver_id:driver_id,
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
           <h1 className="text-center mt-5">driver</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex" onSubmit={handleSubmit}>
               <input value = {driver_id} onChange={e => set_driver_id(e.target.value)} type="text"
                className="driver_id" placeholder="driver_id"/ >  
               <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_driver

