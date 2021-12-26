import React, {useState, useEffect} from "react";
import Products from "./Products";
import "./style.css";


const Categories = (props) => {
    const [category, setCategory] = useState("");
    const filterData=() => {
       if(category === "") {
           return []
       }
        return (
            props.data.filter((element) => {
                return element.category === category
            })
        )
    } 
    const categiries = [{name: "men's clothing", img: "https://images.squarespace-cdn.com/content/v1/57fa9cafe4fcb5e6ab28144a/1601311023900-GPNHPV8VDVFEUR4Q4LHB/sustainable+men%27s+clothing?format=1000w"}, {name:"jewelery", img: "https://i.pinimg.com/originals/3e/2f/69/3e2f69543d79790115786b1444ace0d2.jpg"}, {name:"electronics", img: "https://media-exp1.licdn.com/dms/image/C4E1BAQGENeCDJ5VXPg/company-background_10000/0/1559151958971?e=2159024400&v=beta&t=aVOx6JocN4tZFBf4ssICncreN4NSR3X86Btrn_WtTbk"}, {name: "women's clothing", img: "https://www.namesnack.com/images/namesnack-womens-clothing-business-names-3000x3000-20200729.jpeg?crop=21:16,smart&width=420&dpr=2"}]

    const backToCategories = () => {
        setCategory("")
    }

    if(category === "") {
        return(
            <div className="category-page">
            {categiries.map((item) => {
                return(
                    <div>
                    <h1 onClick={() =>{setCategory(item.name)}} key={item.name}>{item.name}</h1>

                    <img className="category-imgs" onClick={() =>{setCategory(item.name)}} key={item.name} src={item.img}/>

                    </div>
                )
            })}
        </div>
        )
    }
    return(
        <div>
            <div className="bottom-nav">
            <button className="category-btn" onClick={backToCategories}>Back to categories</button>
            </div>
            <Products data={filterData()} addToCart={props.addToCart} />
        </div>

    )


}


export default  Categories