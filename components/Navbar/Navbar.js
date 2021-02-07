import Logo from '../../img/logo.svg'
import { Container, ClickLogo, LogoImg } from './NavbarStyles'
import { Link } from 'react-router-dom'

function Navbar() {
  return(
      <Container>
        <ClickLogo className="clickLogo">
          <Link to="/">
            <LogoImg src={Logo} alt="logo starwars"/>
          </Link>
        </ClickLogo>
      </Container>
  )
}

export default Navbar