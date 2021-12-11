import React from 'react';
//geting the logo
import Logo from '../../img/LOGO.png';
//own styles
import './index.css';
//Router
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <>
            <header>
                <div className="div-intern">
                    <img className="logo" alt="Logo" src={Logo}/>
                    <nav>
                        <Link className="LinkItem" to={`/`}>Inicio</Link>
                        <Link className="LinkItem" to={`/turns`}>Turnos</Link>
                        <Link className="LinkItem" to={`/plans`}>Planes</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
