import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span>&#123;</span>
        <Icon icon="solar:star-bold" width="2rem" height="2rem" id='logo-icon' />        
        <span>&#125;</span>
      </div>
      <nav>
        <a href="">Sobre Mi</a>
        <a href="">Habilidades</a>
        <a href="">Proyectos</a>
        <a href="https://drive.google.com/file/d/1c6gwb21RlpnsBcyR3tWmsWw35ITt7RGp/view?usp=sharing" id='btn-cv' target='_blank'>CV</a>
      </nav>
    </header>
  )
}

export default Header