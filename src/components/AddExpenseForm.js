import React, {useState, useContext, useReducer} from "react";
import { AppContext  } from "../context/AppContext";
import { v4 as uuidv4} from "uuid"; // generated random id

const AddExpense = () => {
    const { dispatch } = useContext(AppContext);
const [name, setName]= useState('');
const [price, setPrice]= useState('');

const onSubmit = (event) =>{
    event.preventDefault();
   const expense = {
    id: uuidv4(),
    name: name,
    price:  parseInt(price)
   };
   dispatch({
    type: 'ADD_EXPENSE',
    payload: expense
   })
}
    return(
        <form onSubmit={onSubmit}>
            <div className="row d-inline-flex">
                <div className="col-sm mt-3">
                    <label for='name' > Name</label>
                    <input required='true' 
                            type='text'
                            className="form-control" 
                            id="name" 
                            value={name} 
                            onChange={(event)=> setName(event.target.value)} />
                </div>
                <div className="col-sm mt-3">
                    <label for='price'>Price</label>
                    <input required='true'
                            type='text' 
                            className="form-control" 
                            id='price' 
                            value={price}
                            onChange={(event)=> setPrice(event.target.value)} />
                </div>
                <div className="col-sm mt-4">
                    <button type="submit" className="btn btn-primary" >Save</button>
                </div>
            </div>
        </form>
    )
}
export default AddExpense;