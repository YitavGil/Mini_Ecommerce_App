import React from "react";


const Cart = ({cart, removeItem}) => {
return(
cart.map((item) => {
    return(
        <div className="cart-container">
               
                <img className="img" src={item.product.image} />
                <h5>{item.product.title}</h5>
                <p>${item.product.price * item.count}</p>
                <h1>{item.count}</h1>
                <button className="remove-btn" onClick={() => removeItem(item.product.id)}>Remove</button>

                </div>
    )
})

)


}


export default Cart