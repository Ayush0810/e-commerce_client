import React, { useState } from 'react'
import "./Product.scss"
import "boxicons"
function Product() {
  const [selectImages, setselectImages] = useState();
  const [quantity, setquantity] = useState(0);
  const images = [
    "https://i.pinimg.com/originals/49/34/2c/49342cc030117c975ce569e62a05dc5f.jpg",
    "https://i.pinimg.com/originals/87/c1/bf/87c1bfb749b81421ce1c2bff324a63e3.jpg",
  ]
  return (
   <div className="product">
    <div className="left">
      <div className="images">
<img src={images[0]} alt="" onClick={e=>setselectImages(0)}/>
<img src={images[1]} alt="" onClick={e=>setselectImages(1)}/>
      </div>
      <div className="mainImg">
        <img src={images[selectImages]} alt="" />
      </div>
    </div>
    <div className="right">
      <h1>Title</h1>
      <span>$199</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores expedita distinctio cumque aperiam minus ut repudiandae id, laboriosam voluptas?</p>
      <div className="quantity">
        <button onClick={()=>setquantity(prev=>prev===1?1:prev-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>setquantity(prev=>prev+1)}>+</button>
      </div>
      <button className="add">
      <box-icon type='solid' name='cart-add'></box-icon>ADD TO CART
      </button>
      <div className="link">
        <div className="item">
      <box-icon name='heart' ></box-icon>ADD TO WISHLIST
        </div>
        <div className="item">
        <box-icon name='sync'></box-icon>ADD TO COMPARE
        </div>
      </div>
      <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
    </div>
   </div>
  )
}

export default Product