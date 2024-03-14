import { useState, useEffect } from 'react';
import DB from '../db/db.json';

const Projects = () => {

  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    console.log(DB);
  }, [])
  

  return (
    <section id="projects">
      <h2 className="section-title">Proyectos</h2>
      {/*  ANCHOR?  */}
      <div className="project-container"> 
        <div className="tech-tags">
          <p>#REACT</p>
          <p>#TYPESCRIPT</p>
          <p>#TAILWINDCSS</p>
        </div>
        <h4>Nombre Proyecto</h4>
      </div>
    </section>
  )
}

export default Projects