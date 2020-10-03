import React from 'react';
import COFFEE_DATA from '../../data/coffee.data';

const Information= ()=>{
    return (
        COFFEE_DATA.Description.map((coffee)=>(
            <h1>{coffee.title}</h1>
        ))
    );

}

export default Information;