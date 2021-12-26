import React, {useState, useEffect} from 'react';

import Navbar from './comps/Navbar';
import Products from './comps/Products';
import Home from './comps/Home';
import Categories from './comps/Categories';
import {BrowserRouter, Route} from 'react-router-dom'
import Cart from './comps/Cart';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  let componentMounted = true;

 const addToCart = (product) => {
   
    const newArray = [...cart]
   const index = newArray.findIndex((item) => {
      return item.product.id === product.id

  })
  
    if(index > -1){
      newArray[index].count++
    }
    else{
      newArray.push({product: product, count: 1})
    }
    
    setCart(newArray)
    saveToLocalStorage(newArray)
  }

  const removeItem = (id) => {
    const newCart = [...cart]
  const index = newCart.findIndex((item) => {
    return item.product.id === id

})

  if(newCart[index].count > 1){
    newCart[index].count--
  }
  else{
    newCart.splice(index, 1)
  }

  setCart(newCart)
  saveToLocalStorage(newCart)
}
    

const saveToLocalStorage = (cart) => {
  localStorage.setItem("cart-item", JSON.stringify(cart))
}

useEffect(() =>{
  const getProducts = async () =>{
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted) {
          setData(await response.clone().json());
          setLoading(false);
          
      }

      return () => {
          componentMounted = false
      }
  }
  const JSONStringCart = localStorage.getItem("cart-item")
  if(JSONStringCart){
    const temporaryCart = JSON.parse(JSONStringCart) 
    setCart(temporaryCart)
  }
  getProducts()
}, []);

  const Loading = () => {
      return (
          <div className="loading">
          Loading...
          </div>
      )
  }
  if(loading) {
    Loading()
    
  }
  return (
    <div className="App">
      <Navbar itemCart = {cart.length}/>
    
        <Route exact path="/" component={Home} />
        <Route exact path="/products">
        <Products data={data} addToCart={addToCart}/>
        </Route>
        <Route exact path={"/categories"}>
          <Categories data={data} addToCart={addToCart} />
        </Route>
        <Route exact path={"/cart"}>
          <Cart cart={cart} removeItem={removeItem} />
        </Route>
     
        
      
    </div>
  );
}

export default App;
