import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

import { useEffect, useRef } from 'react';

function App() {
  const navbarRef = useRef(null);
  const mainContainerRef = useRef(null);

  const spaceBtwElements = () => {
    // Obteniendo del DOM los elemenos
    const header = document.querySelector('header');
    const navbar = document.querySelector('header nav');
    const mainContainer = document.querySelector('#main-container');

    // Obteniendo su posicion en pantalla
    const positionHeader = header.getBoundingClientRect();
    const positionMainContainer = mainContainer.getBoundingClientRect();

    // Espacio disponible entre ellos al scrollear
    const spaceBtw = positionMainContainer.top - positionHeader.bottom;
    console.log(spaceBtw);

    // agregando cambio de color con clases
    if(spaceBtw <= 1) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', spaceBtwElements);
    return () => {
      window.removeEventListener('scroll', spaceBtwElements);
    };
  }, []);

  return (
    <>
      <Header  navbarRef={navbarRef}/>
      <Welcome />
      <main id='main-container' ref={mainContainerRef}>
        <About />
        <Skills />
        <Projects/>
      </main>
      <Footer />
    </>
  )
}

export default App 