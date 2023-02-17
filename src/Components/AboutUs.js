import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className='Container About'>
        <div className='Container_BoxAbout'>
            <img src='./Images/about.jpeg' alt='About' />
            <div className='AddressBox'>
            <div className='contents'>
                    <h3>Come and Visit Us</h3>
                </div>
                <div className='contents'>
                    <img src='./Images/location.svg' alt='Location' />
                    <p>837 W. Marshall Lane <br/> Marshalltown, IA <br/> 50158, Los Angeles</p>
                </div>
                <div className='contents'>
                    <img src='./Images/contact.svg' alt='Location' />
                    <p>(414) 857 - 0107</p>
                </div>
                <div className='contents'>
                    <img src='./Images/mail.svg' alt='Location' />
                    <p>losangeles@restaurantex.com</p>
                </div>
            </div>
        </div>
        <div className='Container_BoxAbout'>
            <h1>About us</h1>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam</p>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam </p>
            <div className='BtnBox'>
            <button className="btn1">About Us</button>
                <button className="btn2" >Join Our Team</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;