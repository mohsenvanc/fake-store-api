import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductList from "./ProductList";
import { useState, createContext } from "react";
import Cart from "./Cart";
import WishList from "./WishList";
export const myContext = createContext()

function App() {
    const [favourite, setFavourite] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product)=>{
        setCartItems([...cartItems, product])
    }
    const deleteHandler = (id) =>{
        setCartItems(cartItems.filter((item)=> item.id !== id));
    }

    const wishList = (product) =>{
        setFavourite([...favourite, product])
    }
  return (
   <myContext.Provider value={{ cartItems, deleteHandler, handleAddToCart, wishList, favourite}}>
    <Router>
   <Routes>
   <Route path="/productslist" element={<ProductList/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/wishlist" element={<WishList/>}/>


   </Routes>
   </Router>
   </myContext.Provider>
  );
}

export default App;
