import { Icon } from '@iconify/react';


const Welcome = () => {
  return (
    <div id='welcome'>
      <h2>Hola {""}
      <Icon icon="mdi:hand-wave" width="3rem" height="3rem" id='welcome-hand-icon' />
      {""} soy
      </h2>
      <h1>Fiorela Cristaldo</h1>
      <div className='subtitle'>
        <h2>
          desarrolladora {""}
          <span className='subtitle-pill'>fullstack</span>
        </h2>
        <h3>
          con pasión por el {""}        
        <Icon icon="lucide:sparkle" width="1.2rem" height="1.2rem" />
          {""} frontend {""}
          <Icon icon="lucide:sparkle" width="1.2rem" height="1.2rem" />
        </h3>
      </div>
    </div>
  )
}

export default Welcome