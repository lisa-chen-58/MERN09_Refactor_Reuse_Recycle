import '../App.css';
import React, { useState  } from 'react'
import ProductForm from "../components/ProductForm";
import Display from "../components/Display";


const Main = () => {

    const [productList, setProductList] = useState([])
    // we initialize the state to what we want it to appear as (array)

    return (
        <div className="App">
            <ProductForm 
                productList={productList} 
                setProductList={setProductList}
            />
            <hr/>
            <Display  
                productList={productList} 
                setProductList={setProductList}
            />
        </div>
    )
}

export default Main;