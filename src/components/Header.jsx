import React from 'react'
import { Icon } from '@iconify/react';

import { cvSpanish, logo } from '../db/cv.js';

const Header = ({navbarRef}) => {
  return (
    <header ref={navbarRef}>
      <div className="logo">
        {/* <span>&#123;</span>
        <Icon icon="solar:star-bold" width="2rem" height="2rem" id='logo-icon' />        
        <span>&#125;</span> */}
        <img src={logo} alt="hola" height={55} />
      </div>
      <nav>
        <a href="#about">Sobre Mi</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href={cvSpanish} id='btn-cv' target='_blank'>CV</a>
      </nav>
    </header>
  )
}

export default Header