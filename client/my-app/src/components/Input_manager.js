import React,{Fragment,useState} from 'react'


const Input_manager = () => {


    const [mgr_id, set_mgr_id] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/manager/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    mgr_id:mgr_id,
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
           <h1 className="text-center mt-5">Manager</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex" onSubmit={handleSubmit}>
               <input value = {mgr_id} onChange={e => set_mgr_id(e.target.value)} type="text"
                className="mgr_id" placeholder="mgr_id"/ >  
               <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_manager

