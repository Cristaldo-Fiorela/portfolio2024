const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Habilidades</h2>
      <div className="skill-container">
        <section id="skill-front">
          <h3>Desarrollo Frontend</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>TyperScript</p>
          <p>React.js</p>
          <p>React Native</p>
        </section>

        <div className="skill-container-small">
          <section id="skill-back">
            <h3>Desarrollo Backend</h3>
            <p>Node.js</p>
            <p>MongoDB</p>
          </section>

          <section id="skill-ver">
            <h3>Control de versiones</h3>
            <p>Git</p>
            <p>GitHub</p>
          </section>
        </div>

      </div>
    </section>
  )
}

export default Skills