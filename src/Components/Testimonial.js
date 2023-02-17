import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className='Container testImo'>
        <h1>What our clients say</h1>
        <p className='para2'>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
        <div className='Container2'>
            <div className='Arrow'><img src='./Images/left-arrow.svg' alt='' /></div>
            <div className='Review'>
              <div className='Stars'><img src='./Images/star.svg' alt='Stars' />
              <img src='./Images/star.svg' alt='Stars' />
              <img src='./Images/star.svg' alt='Stars' />
              <img src='./Images/star.svg' alt='Stars' />
              <img src='./Images/star.svg' alt='Stars' /></div>
              <h2>“You must try these burgers”</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
              <div className='Stars'><img className='Reviewer' src='./Images/face1.jpg' alt='Reviwer' /><div><h4>Matt Cannon
                 </h4>
                <p>San Diego, CA</p>
                </div></div>
            </div>
            <div className='Arrow'><img src='./Images/right-arrow.svg' alt='' /></div>
        </div>
        <div
          className="BtnBox"
          style={{ justifyContent: "center", padding: "2.5rem" }}
        >
          <button className="btn2">Order Online</button>
          <button className="btn1" >
            Book a table
          </button>
        </div>
    </div>
  )
}

export default Testimonial;