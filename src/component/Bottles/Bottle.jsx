import React from 'react';
import './bottles.css'
const Bottle = ({bottle}) => {
    const {name,img,price}=bottle;
    return (
        <div className='bottle '>
            <h2>{bottle.name}</h2>
            <img src={bottle.img} alt="" />
            <p>$:{bottle.price}</p>
        </div>
    );
};

export default Bottle;