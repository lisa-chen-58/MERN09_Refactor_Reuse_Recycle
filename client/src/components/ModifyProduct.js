import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ModifyProduct = (props) => {
    const{id}=props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err))

    },[id]) 
            //id is not needed, but removes a warning

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate(`/products/${id}`);
            })
            .catch(err => console.log(err))
    }

    

    return (
        <div>
            <div>
                <h3>Update the following Fields</h3>
            </div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <p>
                    <label>Title: </label><br/>
                    <input placeholder={title}type="text" onChange = {(e)=>{
                        console.log(e)
                        console.log(e.target)
                        console.log(e.target.value)
                        setTitle(e.target.value)
                        }}/>
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input placeholder={price}type="number" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description: </label><br/>
                    <input placeholder={description} type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <button className="submit-button" type="submit">Submit</button>
            </form>
            <Link className="home-button" to={"/"}>Home</Link>
        </div>
    );
};

export default ModifyProduct