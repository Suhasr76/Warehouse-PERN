import React,{Fragment,useState} from 'react'


const Input_food = () => {

    const [item_id,setitem_id]=useState("")
    const [is_ref,setis_ref]=useState("")
    const [name,setname]=useState("")
    const [exp_date,setexp_date]=useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/food/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    "item_id":item_id,
                    "is_ref":is_ref,
                    "name":name,
                    "exp_date":exp_date
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
           <h1 className="text-center mt-5">Food</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text" value={item_id} onChange={e=>setitem_id(e.target.value)} className="form-control" placeholder="item_id"/> 
                <input value={is_ref} onChange={e=>setis_ref(e.target.value)} className="form-control"  placeholder="is_ref"/>
                <input value={name} onChange={e=>setname(e.target.value)} className="form-control"  placeholder="name"/>
                <input value={exp_date} onChange={e=>setexp_date(e.target.value)} classname="form-control"  placeholder="exp_date"/>
                <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_food

