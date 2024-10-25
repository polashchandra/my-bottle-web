import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import './Botttle.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);

    return (
        <div >
            <h2>Bottles here: {bottles.length}</h2>

            <div className='bottle-countainer'>

            {bottles.map(bottle => (
                <Bottle key={bottle._id} bottle={bottle} />
            ))}
            </div>
        </div>
    );
};

export default Bottles;
