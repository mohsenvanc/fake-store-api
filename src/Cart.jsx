

import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {myContext} from './App';
export default function Cart({}) {
    
    const contextData = useContext(myContext)
    const navigate = useNavigate()
    // useEffect(() => {
    //     setProductShow(cartItems);
    // }, [cartItems]);

    const backToList = () =>{
        navigate("/productslist")
    }

    


    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-brand" onClick={backToList}>Back to Product List</button>
                    <span>{contextData.age}</span>
                </div>
            </nav>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {contextData.cartItems.map((item) => (
                    <div key={item.id} className="card" style={{ width: "18rem", margin: "10px", height: "auto" }}>
                        <img src={item.images[0]} className="card-img-top" style={{ width: "50%", margin: "auto" }} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <button className="btn btn-primary" onClick={() => contextData.deleteHandler(item.id)}>Remove</button><h5>Price: ${item.price}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

