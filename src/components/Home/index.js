import background from '../../img/background.png';
import { App } from './styles';

function Home() {
  return (
    <App>
      <div className="app">
      <img src={background} alt="background"/>
      </div>
    </App>
  )
}

export default Home;