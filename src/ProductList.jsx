import React, { useEffect, useState, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { myContext } from './App';
export default function ProductList({}) {
    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate();
    const contextData = useContext(myContext)
    useEffect(() => {
        fetch("https://dummyjson.com/products").then((response) => response.json()).then((data) => setProducts(data.products)).catch((error) => console.log(error))
        console.log(products)
    }, [])

    // const addToCartAndNavigate = (product) => {
    //     handleAddToCart(product)
    //     navigate("/cart")
    // }

    const viewCartHandler = () => {
        navigate("/cart")
    }

    const viewWishList = () => {
        navigate("/wishlist")
    }

    const filteredProducts = products.filter((product)=>
    
        product.title.toLowerCase().includes(searchInput.toLowerCase())
    )
        
    

    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-brand" onClick={viewCartHandler}>View Cart</button>
                    <button class="navbar-brand" onClick={viewWishList}>View Wish List</button>

                </div>
            </nav>

            <div class="input-group mb-3">
            <input className='form-control' placeholder='search here' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
            
                
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
                {filteredProducts.map((product) => (

                    <div key={product.id} className="card" style={{ width: "100%", height: "auto", border: "1px solid #ccc", margin: "10px", width: "250px" }}>
                        <img src={product.images[0]} className="card-img-top" style={{ width: "50%", margin: "auto" }} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <button className="btn btn-primary" onClick={() => contextData.handleAddToCart(product)}>Add to Cart</button><h5>Price: ${product.price}</h5>
                            <button className="btn btn-primary" onClick={() => contextData.wishList(product)}>Add to wish list</button>

                        </div>
                    </div>





                ))}
            </div>

        </>

    )
}