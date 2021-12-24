import React from "react";
import "./style.css";

const Home = () => {
    return(
    <div className="home">
        <h1 className="home-banner">2021 Winter Sale!</h1>
        <img className="banner1" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/winter-sale-banner-template-design-5a99a7cbeb25317e2f6e89c86d36ed85_screen.jpg?ts=1577318161" />
        <div className="home-images">
        <img className="gif" src="https://i.pinimg.com/originals/2e/cf/08/2ecf08f5f1d603950ac596b22da208f6.gif" />
        <img className="home-image" src="https://images.streetstylestore.com/new-sssnew-images/dec-2021/winter_collection_cover_16_dec.jpg" />

        </div>

    </div>
    )
}

export default Home