import React from 'react'
import { assets } from '../assets/assets'
import './Home.css'
const Home = () => {
  return (
   <div className="image">
    <img src={assets.carousel} alt="carousel.jpg" />
    <div className="text">
    <p>BEST PRINTING PRESS<br/>
    IN THE TOWN </p>
    </div>
<div className="review">
    <div className="print">
            <button className="print"><p>Print Your Design Now</p></button>
        <img src={assets.Playbutton} alt=""/>
    </div>
   
</div>
   </div>

  )
}

export default Home
