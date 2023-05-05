import React from 'react'
import "./Footer.scss"
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus voluptates error laudantium maiores similique illum doloremque quasi! Nostrum, nulla!</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quidem error distinctio quam enim id ratione! At consequatur praesentium ea.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            Ecommerce
          </span>
          <span className="copyright">
          Copyright 2023.All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer