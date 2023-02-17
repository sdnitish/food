import React from 'react';
import './BigBurger.css';

const BigBurger = () => {
  return (
    <div className='BurgerContainer'>
        <div className='Box1'>
            <p className='pHead'>Taste the most delicious burger in Los Angeles, CA</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum. Order online</p>
            <div
        className="BtnBox"
        style={{ padding: "0" }}
      >
        <button className="btn1">Order Online</button>
        <button className="btn2" >
          Reservate
        </button>
      </div>
        </div>
        <div className='Box2'>
            <img src='./Images/bigBurger.jpeg' alt='Big Burger'/>
        </div>
    </div>
  )
}

export default BigBurger;