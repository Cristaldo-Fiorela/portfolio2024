import { Icon } from '@iconify/react';


const Welcome = () => {
  return (
    <div id='welcome'>
      <h2>Hola {""}
        <span>
          <Icon icon="mdi:hand-wave" width="2rem" height="2rem" />
        </span>
        {""} soy
      </h2>
      <h1>Fiorela Cristaldo</h1>
      <div>
        <h3>
          desarrolladora {""}
          <span>fullstack</span>
        </h3>
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