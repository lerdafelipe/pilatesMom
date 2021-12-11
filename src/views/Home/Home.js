import React from 'react'
//Component of Prices's card
import PricingCardContainer from '../../components/PricingCardContainer/PricingCardContainer';
//Component of Select reservations
import Selector from '../../components/selector/selector';
//Component of slider of photographs
import Slider from '../../components/Slider/Slider';

const Home =() =>{
    return (
        <>
            <Slider/> 
            <Selector/>
            <PricingCardContainer/>  
        </>
    )
}

export default Home;