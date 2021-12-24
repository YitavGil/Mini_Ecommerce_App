import React from "react";


const Cart = (props) => {
return(
props.cart.map((item) => {
    return(
        <div className="product-container">
               
                <img className="img" src={item.image} />
                <h5>{item.title}</h5>
                <p>${item.price}</p>

                </div>
    )
})

)


}


export default Cart