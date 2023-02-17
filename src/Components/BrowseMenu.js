import React from "react";
import "./BrowseMenu.css";

const BrowseMenu = () => {
  return (
    <div
      className="Container BrowseMenu"
      style={{ flexDirection: "column", marginTop: "2.8rem" }}
    >
      <p className="subHead2">Browse our menu</p>
      <div className="Container2">
        <div className="menuCard">
          <img src="./Images/menuItem1.svg " alt="Menu Item" />
          <h3>Breakfast</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam
          </p>
          <h4>Explore Menu</h4>
        </div>
        <div className="menuCard">
          <img src="./Images/menuItem2.svg " alt="Menu Item" />
          <h3>Main Dishes</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam
          </p>
          <h4>Explore Menu</h4>
        </div>
        <div className="menuCard">
          <img src="./Images/menuItem3.svg " alt="Menu Item" />
          <h3>Drink</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam
          </p>
          <h4>Explore Menu</h4>
        </div>
        <div className="menuCard">
          <img src="./Images/menuItem4.svg " alt="Menu Item" />
          <h3>Desserts</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam
          </p>
          <h4>Explore Menu</h4>
        </div>
      </div>
      <div
        className="BtnBox"
        style={{ justifyContent: "center"}}
      >
        <button className="btn2">Order Online</button>
        <button className="btn1" >
          Book a table
        </button>
      </div>
    </div>
  );
};

export default BrowseMenu;
