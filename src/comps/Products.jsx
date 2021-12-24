import React, {useState, useEffect} from "react";


const Products = (props) => {
    const [data, setData] = useState(props.data);
    const [filter, setFilter] = useState(props.data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;


    const Loading = () => {
        return (
            <div className="loading">
            Loading...
            </div>
        )
    }

    const ShowProduct = () => {
        return (<>
        {props.data.map((product) => {
            console.log("hello", filter);
            return(
              
                <div className="product-container">
               
                <img className="img" src={product.image} />
                <h5>{product.title}</h5>
                <p>${product.price}</p>
                <button onClick={() => props.addToCart(product)} className="item-btn">Add to Cart</button>
                </div>
            
            )
        })}</>
        )
    }

return (
    
    <div className="main-page">
       <ShowProduct />
    </div>
)
}
export default Products