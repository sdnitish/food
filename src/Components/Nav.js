import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show,setShow] = useState(true);
  return (
    <nav className="NavBar">
      <div className="Both">
        <div className="Logo">
          <img src="./Images/logo.svg" alt="Logo" />
        </div>
        <ul class={`MenuItem ${show?"MenuShow":""}`}>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li>Page</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="Both NavBtns">
        <button className="btn1">OrderOnline</button>
        <button className="btn2" style={{marginLeft:'2rem'}}>Reservate</button>
      </div>
      <div className="MenuIconBox" onClick={()=>setShow(!show)}>
      <ion-icon id="MenuIcon" name="menu-outline"></ion-icon>
      </div>
    </nav>
  );
};



export default Nav;
