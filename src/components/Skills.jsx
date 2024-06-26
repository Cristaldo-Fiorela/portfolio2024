import { Icon } from '@iconify/react';

// TODO: REALIZAR UN COMPONENTE PARA LOS P QUE CONTIENEN LAS SKILLS.

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">
        Habilidades {""}
      <Icon icon="akar-icons:sparkles" width="3rem" height="3rem" />
      </h2>
      <div className="skill-container">
        <section id="skill-front">
          <h3>Desarrollo Frontend</h3>
          <div className="skill-name-container">
            <p>HTML <Icon icon="skill-icons:html" width="1.7rem" height="1.7rem" /> </p>
            <p>CSS <Icon icon="skill-icons:css" width="1.7rem" height="1.7rem" /></p>
            <p>JavaScript <Icon icon="skill-icons:javascript" width="1.7rem" height="1.7rem" /></p>
            <p>TyperScript <Icon icon="skill-icons:typescript" width="1.7rem" height="1.7rem" /></p>
            <p>React.js <Icon icon="logos:react" width="1.7rem" height="1.7rem" /></p>
            <p>React Native <Icon icon="logos:react" width="1.7rem" height="1.7rem" /></p>
          </div>
        </section>

        <div className="skill-container-small">
          <section id="skill-back">
            <h3>Desarrollo Backend</h3>
            <div className='skill-name-container'>
              <p>Node.js <Icon icon="devicon:nodejs" width="1.7rem" height="1.7rem" /></p>
              <p>MongoDB <Icon icon="vscode-icons:file-type-mongo" width="1.7rem" height="1.7rem" /></p>
            </div>
          </section>

          <section id="skill-ver">
            <h3>Control de versiones</h3>
            <div className='skill-name-container'>
              <p>Git <Icon icon="devicon:git" width="1.7rem" height="1.7rem" /></p>
              <p>GitHub <Icon icon="fluent-mdl2:git-hub-logo" width="1.7rem" height="1.7rem" /></p>
            </div>
          </section>
        </div>

      </div>
    </section>
  )
}

export default Skills