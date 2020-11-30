import { App } from './styles'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'

function Films() {
  return (
    <App>
      <div className="contentFilms">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
    </App>
  )
}

export default Films