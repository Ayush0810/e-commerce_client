import React, { useState } from 'react'
import "./Slider.scss";
// import image1 from "../../images/1.webp"
// import image2 from "../../images/2.webp"
// import image3 from "../../images/3.webp"
import "boxicons"

function Slider() {

  const [currentSlide,setCurrentSlide] = useState(0);

  const prevSlide = ()=>{
    setCurrentSlide(currentSlide ===0? 2:currentSlide-1)
  }
  const nextSlide = ()=>{
    setCurrentSlide(currentSlide ===2? 0 : currentSlide+1)
  }
const image1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreativemachine.co%2Fwp-content%2Fuploads%2F2020%2F03%2Fecommerce_men_s_clothing_banner_template_13_1200x628.jpg&f=1&nofb=1&ipt=15364fb035c249987e24651850601f6bd04e6bb7085a1611151e73f92752a229&ipo=images"
    const images=[
            image1,
            // image2,
            // image3,
    ]
  return (
    <div className="slider">
    <div className="container" style={{
      transform:`translateX(-${currentSlide *100}vw)`
    }}>

        <img src={images[0]} alt="" />
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
    </div>

    <div className="icons">
        <div className="icon" onClick={prevSlide}>
        <box-icon name='left-arrow-alt'></box-icon>
        </div>
        <div className="icon" onClick={nextSlide}>
        <box-icon name='right-arrow-alt' ></box-icon>
        </div>
    </div>
    </div>
  )
}

export default Slider