import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Habilidades</h2>
      <div className="skill-container">
        <section id="skill-front">
          <h3>Desarrollo Frontend</h3>
          <div className="skill-name">
            <p>HTML <Icon icon="skill-icons:html" width="1.2rem" height="1.2rem" /> </p>
            <p>CSS <Icon icon="skill-icons:css" width="1.2rem" height="1.2rem" /></p>
            <p>JavaScript <Icon icon="skill-icons:javascript" width="1.2rem" height="1.2rem" /></p>
            <p>TyperScript <Icon icon="skill-icons:typescript" width="1.2rem" height="1.2rem" /></p>
            <p>React.js <Icon icon="logos:react" width="1.2rem" height="1.2rem" /></p>
            <p>React Native <Icon icon="logos:react" width="1.2rem" height="1.2rem" /></p>
          </div>
        </section>

        <div className="skill-container-small">
          <section id="skill-back">
            <h3>Desarrollo Backend</h3>
            <div className='skill-name'>
              <p>Node.js <Icon icon="devicon:nodejs" width="1.2rem" height="1.2rem" /></p>
              <p>MongoDB <Icon icon="vscode-icons:file-type-mongo" width="1.2rem" height="1.2rem" /></p>
            </div>
          </section>

          <section id="skill-ver">
            <h3>Control de versiones</h3>
            <div className='skill-name'>
              <p>Git</p>
              <p>GitHub</p>
            </div>
          </section>
        </div>

      </div>
    </section>
  )
}

export default Skills