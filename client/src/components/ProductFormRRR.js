import React, { useState  } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const { initialProductList, initialTitle, initialPrice, initialDescription } = props;
    
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
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
                setTitle("");
                setPrice("");
            })
            .catch(err => console.log(err))
    }
}

return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
        <p>
            <label>Title: </label><br/>
            <input type="text" onChange = {(e)=>{
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