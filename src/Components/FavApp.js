import React from 'react';
import './FavApp.css';

const FavApp = () => {
  return (
    <div className='Container FavApp' >
        <p className='subHead'>Order from your favorite app today!</p>
        <div className='Container2'>
            <img src='./Images/app1.svg' alt='Apps' />
            <img src='./Images/app2.svg' alt='Apps' />
            <img className='app3' src='./Images/app3.svg' alt='Apps' />
            <img src='./Images/app4.svg' alt='Apps' />
        </div>
    </div>
  )
}

export default FavApp;