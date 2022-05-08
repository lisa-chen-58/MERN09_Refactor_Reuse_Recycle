import React, { useState  } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const{productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data])
                // setProductList is a method, not a function
                setTitle("");
                setPrice("");
            })
            .catch(err => console.log(err))
    }

    return (
        // <form onSubmit={onSubmitHandler}> (same thing, short hand notation)
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <p>
                <label>Title: </label><br/>
                <input type="text" onChange = {(e)=>{
                    //when an event fires off - gives us access to the event object that has access to all those properties seen in the console
                    console.log(e)
                    console.log(e.target)
                    console.log(e.target.value)
                    setTitle(e.target.value)
                    }}/>
            </p>
            <p>
                <label>Price: </label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description: </label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm