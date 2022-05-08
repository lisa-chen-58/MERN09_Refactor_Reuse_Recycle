import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OneProduct = (props) => {
    const [oneProduct, setOneProduct] = useState({});
    const{id}=props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {console.log(err)});

    },[id]);

    const deleteActionAgain = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Cost: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button 
                onClick={()=> deleteActionAgain(id)} 
                className="submit-button"
            >
                Delete this product
            </button>
            <Link 
                className="home-button"
                to={"/"}>Home
            </Link>
        </div>
    );
};

export default OneProduct