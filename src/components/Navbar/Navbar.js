import React from "react";
import "boxicons";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<div className="item">
						<img src="/images/en.png" alt="" />
						<box-icon name="chevron-down"></box-icon>
					</div>

					<div className="item">
						<span>USD</span>
						<box-icon name="chevron-down"></box-icon>
					</div>

					<div className="item">
						<Link className="link" to="/products/1">Women</Link>
					</div>
					<div className="item">
						<Link className="link" to="/products/2">Men</Link>
					</div>
					<div className="item">
						<Link className="link" to="/products/3">Children</Link>
					</div>
				</div>

				<div className="center">
					<Link className="link" to="/">ECOMMERCE</Link>
				</div>

				<div className="right">
					<div className="item">
						<Link className="link" to="/">Homepage</Link>
					</div>

					<div className="item">
						<Link className="link" to="/">About</Link>
					</div>

					<div className="item">
						<Link className="link" to="/">Contact</Link>
					</div>

					<div className="item">
						<Link className="link" to="/">Stores</Link>
					</div>

          <div className="icons">
          <box-icon name='search'></box-icon>
          <box-icon name='user-circle'></box-icon>
          <box-icon name='heart' ></box-icon>

          <div className="cart-icon">

          <box-icon name='cart-alt' ></box-icon>
          <span>0</span>
          </div>
          </div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
