import Logo from '../img/logo.svg';
import { App } from './NavbarStyles';

function Navbar() {
  return(
    <App>
      <div className="content">
        <div className="Clicklogo">
          <img src={Logo} alt="logo starwars"/>
        </div>
      </div>
    </App>
  )
}

export default Navbar;