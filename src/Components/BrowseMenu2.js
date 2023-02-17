import React from "react";
import "./BrowseMenu2.css";
import MenuCard from "./MenuCard";
let item2 = "./Images/item1.jpeg";
let item1 = "./Images/item2.jpeg";
let item3 = "./Images/item3.jpeg";
let item4 = "./Images/item4.jpeg";
let item5 = "./Images/item5.jpeg";
let item6 = "./Images/item6.jpeg";
let item7 = "./Images/item7.jpeg";
let item8 = "./Images/item8.jpeg";
const BrowseMenu2 = () => {
  return (
    <>
      <div className="Container BroMenu2">
        <h1>Browse our menu</h1>
        <p className="para2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
          vitae velit bibendum elementum
        </p>
      </div>
      <div className="Container2">
        <MenuCard price="10.98" image={item1} Name="Classic Burger" />
        <MenuCard price="16.08" image={item2} Name="Choclate Milkshake" />
        <MenuCard price="14.98" image={item3} Name="Classic Fries" />
        <MenuCard price="4.98" image={item4} Name="Pancakes" />
        <MenuCard price="2.50" image={item5} Name="Ice Cream" />
        <MenuCard price="1.98" image={item6} Name="Chicken Burger" />
        <MenuCard price="9.65" image={item7} Name="Egg toast" />
        <MenuCard price="11.98" image={item8} Name="Regular Soda" />
        <div
          className="BtnBox"
          style={{ justifyContent: "center", padding: "2.5rem" }}
        >
          <button className="btn2">Order Online</button>
          <button className="btn1" style={{ marginLeft: "2rem" }}>
            Book a table
          </button>
        </div>
      </div>
    </>
  );
};

export default BrowseMenu2;
