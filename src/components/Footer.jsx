import { useState } from 'react';
import { Icon } from '@iconify/react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Footer = () => {

  const [copy, setCopy] = useState(false);

  const copied = () => {
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }

  return (
    <footer>
      <section id="contact-container">
        <h2>Te gusta mi trabajo? Conectemos!</h2>
        <div id='mail-box'>
          <a href="mailto:cristaldofiorela@gmail.com">cristaldofiorela@gmail.com</a>
          <CopyToClipboard 
            text={'cristaldofiorela@gmail.com'}
            onCopy={copied}
          >
            <button title='copiar'>
              {copy ? 
                <Icon className='icon-copy' icon="tabler:copy-check" width="2rem" height="2rem" />              
                :
                <Icon className='icon-copy' icon="lucide:copy-plus" width="2rem" height="2rem" />
              }
            </button>
          </CopyToClipboard>
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