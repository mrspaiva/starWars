import Logo from '../../img/logo.svg'
import { App } from './NavbarStyles'
import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <App>
      <div className="contentLogo">
        <div className="clickLogo">
          <Link to="/">
            <img src={Logo} alt="logo starwars"/>
          </Link>
        </div>
      </div>
    </App>
  )
}

export default Navbar