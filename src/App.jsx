import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

import { useEffect, useRef } from 'react';


function App() {
  const navbarRef = useRef('');
  const mainContainerRef = useRef('');

  const navbar = document.querySelector('header');
  const mainContainer = document.querySelector('#main-container');

  const spaceBtwElements = () => {
    const positionNavbar = navbar.getBoundingClientRect();
    const positionMainContainer = mainContainer.getBoundingClientRect();

    const spaceBtw = positionMainContainer.top - positionNavbar.bottom;
    console.log(spaceBtw);
  }

  useEffect(() => {
    window.addEventListener('scroll', spaceBtwElements);
    return () => {
      window.removeEventListener('scroll', spaceBtwElements);
    };
  }, []);


  return (
    <>
      <Header  ref={navbarRef}/>
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