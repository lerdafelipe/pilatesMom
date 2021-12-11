import React from 'react';
//own styles
import './index.css';

const PricingCard = ({title, price, description}) => {
    return (
        <div className="Card">
            <h4>{title}</h4>
            <h2>${price}</h2>
            <ul>
                {description.map(ele=>{
                    return (<li key={ele}>{ele}.</li>)
                })}
            </ul>
        </div>
    )
}

export default PricingCard;
