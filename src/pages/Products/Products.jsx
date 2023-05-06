import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import List from "../../components/List/List";
// import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import List from "../../components/List/List";
const data = [
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
const Products = () => {
  // const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  // const [selectedSubCats, setSelectedSubCats] = useState([]);

  // // const { data, loading, error } = useFetch(
  // //   `/sub-categories?[filters][categories][id][$eq]=${catId}`
  // // );

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const isChecked = e.target.checked;

  //   setSelectedSubCats(
  //     isChecked
  //       ? [...selectedSubCats, value]
  //       : selectedSubCats.filter((item) => item !== value)
  //   );
  // };

  const catId = parseInt(useParams().id);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
             
              />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;