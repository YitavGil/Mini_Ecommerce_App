import React from "react";
import "./style.css";
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
        <div className="navbar">
            <div ><NavLink to="/">
            <FaShoppingBag className="icon"/>
            </NavLink>
            </div>
            <div>
                <ul className="nav-links">
                    <li><NavLink to="/products">Shop</NavLink></li>
                    <li><NavLink to="/categories">Categories</NavLink></li>
                    <li className="cart-link"><NavLink to="/cart"><FaShoppingCart className="cart-icon" />Cart&nbsp;  <span>({props.itemCart})</span></NavLink></li>
                </ul>
            </div>

        </div>
        </>
    )
}

export default Navbar