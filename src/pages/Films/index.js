import { App } from './styles'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Card from '../../components/Card'

function Films() {
  return (
    <App>
      <div className="contentFilms">
        <div className="navbar">
          <Navbar />
        </div>
        <h1 class="title">Filmes</h1>
        <div className="search">
          <Search />
        </div>
        <Card />
      </div>
    </App>
  )
}

export default Films