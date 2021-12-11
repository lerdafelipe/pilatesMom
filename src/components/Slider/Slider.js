import React, {useRef, useState} from 'react';
//getting the images to the slider
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';
//getting the images to the slider
//own styles
import './index.css';
//styled component library
import styled from 'styled-components';

const Slider = () =>{
    const slideShow = useRef(null);
    const [despl, setDespl] = useState(0)

    const moveSlide = ()=>{    
        //When the slide shown isn't default value the funtion to change the slide start
        if(slideShow !== null && slideShow.current !== null){
            if(slideShow.current.children.length > 0){
                slideShow.current.style.transition = `1000ms ease-out all`
                if(despl === 600){setDespl(0)}
                else{setDespl(despl+100)}
                slideShow.current.style.transform = `translateX(-${despl}%)`
            }
        }else return
    };

    //The slide shown change each 5 seconds
    setTimeout(()=>{setInterval(moveSlide(), 10000)}, 5000);


    return (
        <ContenedorPrincipal>
            <ContenedorSlideShow ref={slideShow}>
                <Slide>
                    <img src={img1} alt="img"/>
                </Slide>
                <Slide>
                    <img src={img2} alt="img"/>
                </Slide>
                <Slide>
                    <img src={img3} alt="img"/>
                </Slide>
                <Slide>
                    <img src={img4} alt="img"/>
                </Slide>
                <Slide>
                    <img src={img5} alt="img"/>
                </Slide>
                <Slide>
                    <img src={img6} alt="img"/>
                </Slide>
                <Slide>
                    <img src={img7} alt="img"/>
                </Slide>
            </ContenedorSlideShow>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
    max-width: 100vw;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    margin-top:-80px;
`;
const Slide = styled.div`
    max-width: 100%;
    transition: .3 ease all;
`;
let ContenedorSlideShow = styled.div`
    display:flex;
    flex-wrap:nowrap;
    max-width:100vw;
    transform: translateX(-0%);
`;

export default Slider;