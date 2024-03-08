import portrait from '../assets/image/portrait.jpeg';

const About = () => {
  return (
    <section id='about'>
      <h2 className='section-title'>Sobre Mi</h2>
      <div>
        <img src={portrait} alt="retrato" id='portrait'/>
        <p>Soy una persona con un equilibrio entre creatividad y lógica. Descubrí mi pasión por el desarrollo web en 2020, donde encontré la combinación perfecta para utilizar tanto mi lado creativo en el diseño como mi habilidad lógica en la codificación. Estoy comprometido/a a llevar proyectos desde su concepción hasta la realidad, comprendiendo mis capacidades y limitaciones en el proceso.</p>
        <p>Actualmente me encuentro realizando una tecnicatura superior en programación e innovación tecnológica y trabaje como mentora FrontEnd para Argentina Programa 4.0.</p>
      </div>
    </section>
  )
}

export default About