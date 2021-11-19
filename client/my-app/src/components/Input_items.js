import React,{Fragment,useState} from 'react'


const Input_items = () => {


    //const {id} = useParams()
    const [items_id,setitemsID]=useState("")
    const [quantity,setquantity]=useState("")
    const [weight,setweight]=useState("")
    const [del_id,setdel_id]=useState("")
    const [mgr_id,setmgr_id]=useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            
            const response =  fetch("http://localhost:5000/api/items/insert",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    item_id:items_id,
                    quantity:quantity,
                    weight:weight,
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
           <h1 className="text-center mt-5">Items</h1>
           <h3 className="text-left mt-5">Insert</h3>
           <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text" value={items_id} onChange={e=>setitemsID(e.target.value)} className="form-control" placeholder="item_id"/> 
                <input value={quantity} onChange={e=>setquantity(e.target.value)} className="form-control" type="number" placeholder="quantity"/>
                <input value={weight} onChange={e=>setweight(e.target.value)} className="form-control" type="number" placeholder="weight"/>
                <input type="text" value={mgr_id} onChange={e=>setmgr_id(e.target.value)} className="form-control" placeholder="mgr_id"/>
                <input type="text" value={del_id} onChange={e=>setdel_id(e.target.value)} className="form-control" placeholder="del_id" />
                <button onClick={handleSubmit} type="submit" className="btn btn-success">Add</button>
           </form>
       </Fragment>
    )
}

export default Input_items

