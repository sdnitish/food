import React from 'react';

const MenuCard = (props) => {
  return (
    <div className='MenuCard'>
        <div className='Price'><h4> &#36; {props.price} USD</h4></div>
        <img src={props.image} alt='MenuItem' />
        <h2>{props.Name}</h2>
        <p className='para2'>Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
    </div>
  )
}

export default MenuCard;