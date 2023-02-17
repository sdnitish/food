import React from 'react';
import './HomeFirstSect.css';
import './Nav.css';

const HomeFirstSect = () => {
  return (
    <div className='Container HomeFirst'>
        <div className='bgColor'></div>
        <div className='Container_Box'>
            <p className='Main_Heading'>The best place to</p>
            <p className='Main_Heading' style={{color:'#FF7629'}}>eat burgers in LA.</p>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam</p>
            <div className='BtnBox'>
                <button className="btn2">Reservate</button>
            <button className="btn1">OrderOnline</button>
            </div>
        </div>
        <div className='Container_Box'>
            <img src='./Images/burger.jpeg' alt='Burger' />
        </div>
    </div>
  )
};

export default HomeFirstSect;