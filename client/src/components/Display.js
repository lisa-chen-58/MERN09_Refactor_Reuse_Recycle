import React, { useEffect } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Display = (props) => {
    const {productList, setProductList} = props;
    
    // We want to the product to be updated immediately, that's how I know that I want to have state -> go to Main since this is getting imported. So we'll want to pass useState in as a prop    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err)=>console.log(err))
        }, [])
        // axios.post("http://localhost:8000/api/products");

// deleteAction is just a function, we're not routing to anything
const deleteAction = (deleteId) => {
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
    .then((res) => {
        console.log(res);
        console.log(res.data);
        setProductList(productList.filter((product, index) =>
            product._id !== deleteId
        ))
    })
    .catch((err) => console.log(err));
}

    return (
        <div>
            {
                productList.map((product,index) => (
                    <div key={product._id} className="App-header">
                        <tr>
                            <Link className="App-link" to={`/products/${product._id}`}>{product.title} - $'{product.price}' </Link>
                        </tr>
                        <tr>
                            <button className="home-button" onClick={()=> navigate(`/products/update/${product._id}`)}>Modify Link</button>
                            <button className="home-button" onClick={()=> deleteAction(product._id)}>Delete Product</button>
                        </tr>
                    </div>
                ))
            }
        </div>
    )
}

export default Display