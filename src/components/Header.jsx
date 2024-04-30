import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {


  //handleScroll();
  // window.addEventListener('scroll', changeColorNav);

  return (
    <header>
      <div className="logo">
        <span>&#123;</span>
        <Icon icon="solar:star-bold" width="2rem" height="2rem" id='logo-icon' />        
        <span>&#125;</span>
      </div>
      <nav>
        <a href="#about">Sobre Mi</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="https://drive.google.com/file/d/1c6gwb21RlpnsBcyR3tWmsWw35ITt7RGp/view?usp=sharing" id='btn-cv' target='_blank'>CV</a>
      </nav>
    </header>
  )
}

export default Header

//import React, { useRef, useEffect } from 'react';

// function MiComponente() {
//   // Referencias a los elementos
//   const navbarRef = useRef(null);
//   const contenedorRef = useRef(null);

//   // Función para calcular la distancia entre los elementos
//   const calcularDistancia = () => {
//     const rectNavbar = navbarRef.current.getBoundingClientRect();
//     const rectContenedor = contenedorRef.current.getBoundingClientRect();
    
//     // Calcular la distancia vertical entre los elementos
//     const distanciaVertical = rectContenedor.top - rectNavbar.bottom;
    
//     // Imprimir la distancia en la consola
//     console.log('La distancia entre el navbar y el contenedor es: ' + distanciaVertical + ' pixeles.');
//   };

//   // Llamar a la función cuando se haga scroll en la página
//   useEffect(() => {
//     window.addEventListener('scroll', calcularDistancia);
//     return () => {
//       window.removeEventListener('scroll', calcularDistancia);
//     };
//   }, []); // Se ejecuta solo una vez al montar el componente

//   return (
//     <div>
//       <nav ref={navbarRef}>Navbar</nav>
//       <div ref={contenedorRef}>Contenedor de Información</div>
//     </div>
//   );
// }

// export default MiComponente;
