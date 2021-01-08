import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import background from '../../img/background.png';
import logo from '../../img/logo.svg';
import { Container, Background, Logo, Next } from './styles';

function Home() {
  return (
      <Container>
        <Background src={background} alt="background"/>
        <Logo src={logo} alt="logo starwars"/>
        
        <Next>
          <Link to="/category" className="next">
            <FiArrowRight color="#000" size={30}/>
          </Link>
        </Next>
      </Container>
  )
}

export default Home;