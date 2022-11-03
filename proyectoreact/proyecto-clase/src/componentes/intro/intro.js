import React from 'react';
import './intro.css';
import icon from './icon.png';



const Intro = () => {
    return(
    <div className='contenedorImagen'>
    <img src={icon} className="icon" alt="Foto perfil "/>
    </div>
)
}

export default Intro;