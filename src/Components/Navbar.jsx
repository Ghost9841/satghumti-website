import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("Navbar")
  return (
    <nav className="navbar">
      <div className="nav-logo"> 
       <Link  to = "/" ><img src={assets.logo} alt="logo.jpg" /> </Link>
       <Link  style={{textDecoration : "none"}} to = "/"> <p>Satghumti Printing Press</p></Link>
      </div> 
<ul className="nav-menu">
    <li onClick={()=> {setMenu("home")}}><Link style = {{color:"black",textDecoration: "none"}}to = "/">Home</Link>{menu === "home"?<hr/>:<></>}</li>
    <li onClick={()=> {setMenu("about")}}><Link style = {{color:"black",textDecoration: "none"}}to = "/about">About</Link>{menu === "about"?<hr/>:<></>}</li>
    <li onClick={()=> {setMenu("services")}}><Link style = {{color:"black",textDecoration: "none"}}to = "/services">Services</Link>{menu === "services"?<hr/>:<></>}</li>
</ul>

<div className="nav-button">

<button className="contactus"><p>Contact Us</p></button>
<button className="location">
    <img src={assets.locationmap}alt="" />
    <p>Location</p>
</button>

</div>
    </nav>
  )
}

export default Navbar
