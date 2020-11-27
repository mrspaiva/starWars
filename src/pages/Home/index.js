import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import background from '../../img/background.png';
import logo from '../../img/logo.svg';
import { App } from './styles';

function Home() {
  return (
    <App>
      <div className="content">
        <img className="background" src={background} alt="background"/>
        
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo starwars"/>
        </div>
        
        <Link to="/category" className="next">
          <FiArrowRight color="#000" size={30}/>
        </Link>
      </div>
    </App>
  )
}

export default Home;