import portrait from '../assets/image/portrait.jpeg';

const About = () => {
  return (
    <section id='about'>
      <h2 className='section-title'>Sobre Mi</h2>
      <div>
        <img src={portrait} alt="retrato" id='portrait'/>
        <div className='about-description'>
          <p>Soy una persona con un equilibrio entre <span className='yellow-hl'>creatividad</span> y <span className='yellow-hl'>lógica</span>. Descubrí mi pasión por el desarrollo web en 2020, donde encontré la combinación perfecta para utilizar tanto mi lado creativo en el diseño como mi habilidad lógica al codear.</p>
          <p>Mi tiempo como <span className='purple-hl'>Mentora FrontEnd</span> profundice mis conocimientos tecnicos, puse en practica una comunicacion clara para lograr objetivos comunes y la resolucion de problemas.</p>
          <p>Actualmente estoy cursando una <span className='pink-hl'>Tecnicatura Superior en Programación e Innovación Tecnológica</span>, y he tenido la oportunidad de desempeñarme como mentora FrontEnd para Argentina Programa 4.0.</p>
        </div>
      </div>
    </section>
  )
}

export default About