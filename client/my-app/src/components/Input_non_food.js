import React,{Fragment,useState} from 'react'


const Input_non_food = () => {

    const [item_id,setitem_id]=useState("")
    const [category,setcategory]=useState("")
    const [name,setname]=useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/non_food/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    "item_id":item_id,
                    "category":category,
                    "name":name,
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
           <h1 className="text-center mt-5">Non Food</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text" value={item_id} onChange={e=>setitem_id(e.target.value)} className="form-control" placeholder="item_id"/> 
                <input value={category} onChange={e=>setcategory(e.target.value)} className="form-control"  placeholder="category"/>
                <input value={name} onChange={e=>setname(e.target.value)} className="form-control"  placeholder="name"/>
                <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_non_food

