import React from 'react'
import "./Cart.scss"
import "boxicons"
function Cart() {
    const data = [
        {
            id:1,
            img:"https://qph.fs.quoracdn.net/main-qimg-4b33227b77677c50e689adec78d85cc2",
            img2:"https://indiater.com/wp-content/uploads/2019/05/1.jpg",
            title:"Long Sleeve Graphic T-shirt",
            desc:"Sapiente tempore, veniam libero molestias quod vitae minus?",
            isNew:true,
            oldPrice:19,
            price:12
        },
        {
            id:2,
            img:"https://qph.fs.quoracdn.net/main-qimg-4b33227b77677c50e689adec78d85cc2",
            img2:"https://indiater.com/wp-content/uploads/2019/05/1.jpg",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
            desc:"Lorem, ipsum ",
        },
    ]
  return (
   <div className="cart">
   
    <h1>Products in Your Cart</h1>
    {data.map(item=>{
        return <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p >{item.desc?.substring(0,100)}</p>
                <div className="price">1 x ${item.price}</div>
            </div>
    <div className="delete">
    <box-icon name='x' ></box-icon>
    </div>
        </div>
    })}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">Reset Cart</span>
   </div>
  )
}

export default Cart