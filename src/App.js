import React, {useState, useEffect} from 'react';
import './index.css';
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
    newArray.push(product)
    setCart(newArray)
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
          <Cart cart={cart} />
        </Route>
     
        
      
    </div>
  );
}

export default App;
