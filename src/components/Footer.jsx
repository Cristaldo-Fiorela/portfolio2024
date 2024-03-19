import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <section id="contact-container">
        <h2>Te gusta mi trabajo? Conectemos!</h2>
        <div id='mail-box'>
          <a href="mailto:cristaldofiorela@gmail.com">cristaldofiorela@gmail.com</a>
          <button>COPIAR</button>
        </div>
      </section>

      <div id="social-container">
        <a href="https://www.linkedin.com/in/fiorela-cristaldo/" target="_blank" >
          <Icon icon="bi:linkedin" width="2rem" height="2rem" />
        </a>
        <a href="https://github.com/Cristaldo-Fiorela" target="_blank" >
          <Icon icon="bi:github" width="2rem" height="2rem" />
        </a>
      </div>
    </footer>
  )
}

export default Footer