import React from 'react';
//Component only one card
import PricingCard from '../PricingCard/PricingCard';
//own styles
import './index.css';

const PricingCardContainer = () => {
    return (
        <div className="container">
            <div className="title-container">
                <h1 className="title">Planes</h1>
            </div>
            <div className="cardContainer">
                <PricingCard title="1 Clase Semanal" price="1800" description={["1 clase semanal de 1hs"]}/>
                <PricingCard title="2 Clases Semanales" price="2000" description={["2 clases semanal de 1hs"]}/>
                <PricingCard title="3 Clases Semanales" price="2500" description={["3 clases semanal de 1hs"]}/>
            </div>
            <div className="infoPay">
                <h5>Información adicional sobre los planes.</h5>
                <p>La duración de los planes es de un mes calendario. Los pagos de dichos planes, se realizan de forma mensual, los primeros diez días de cada mes.</p>
            </div>
        </div>
    )
}

export default PricingCardContainer;
