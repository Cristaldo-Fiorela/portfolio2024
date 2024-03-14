import DB from '../db/db.json';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Proyectos</h2>
      { DB.map(project => (
        <div 
          className="project-container"
          key={project.id}
          style={{backgroundImage: `url('${project.image}')`}}
        >
          <div className="tech-tags">
            {project.tech.map( (tech, i) => (
              <p key={i}>#{tech}</p>
            ))}
          </div>
          <h4>{project.name}</h4>
        </div>
        ))
      }

    </section>
  )
}

export default Projects