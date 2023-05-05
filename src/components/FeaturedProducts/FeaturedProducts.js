import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
function FeaturedProducts() {
const data =[
    {
        id:1,
        img:"https://qph.fs.quoracdn.net/main-qimg-4b33227b77677c50e689adec78d85cc2",
        img2:"https://indiater.com/wp-content/uploads/2019/05/1.jpg",
        title:"Long Sleeve Graphic T-shirt",
        isNew:true,
        oldPrice:19,
        price:12
    },
    {
        id:1,
        img:"https://i.pinimg.com/originals/49/34/2c/49342cc030117c975ce569e62a05dc5f.jpg",
        img2:"https://i.pinimg.com/originals/87/c1/bf/87c1bfb749b81421ce1c2bff324a63e3.jpg",
        title:"skirt",
        oldPrice:19,
        price:12
    },
    {
        id:1,
        img:"https://qph.fs.quoracdn.net/main-qimg-4b33227b77677c50e689adec78d85cc2",
        img2:"https://i.pinimg.com/originals/87/c1/bf/87c1bfb749b81421ce1c2bff324a63e3.jpg",
        title:"skirt",
        oldPrice:19,
        price:12
    },
    {
        id:1,
        img:"https://qph.fs.quoracdn.net/main-qimg-4b33227b77677c50e689adec78d85cc2",
        img2:"https://i.pinimg.com/originals/87/c1/bf/87c1bfb749b81421ce1c2bff324a63e3.jpg",
        title:"skirt",
        oldPrice:19,
        price:12
    },
]

	return <div className="FeaturedProducts">
   <div className="top">
    <h1>{} products</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eius aut sint odio voluptate voluptates magni soluta. Optio, doloribus odit!</p>
   </div>

   <div className="bottom">
   {data.map(item=>{
    return <Card item={item} key={item.id}/>
   })}
   </div>
    </div>;
}

export default FeaturedProducts;
