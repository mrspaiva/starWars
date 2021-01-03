import { App } from './styles'
import Navbar  from '../../components/Navbar'
import Search from '../../components/Search'
import Card from '../../components/Card'

function People() {
  return (
    <App>
      <div className="contentPeople">
        <div className="navbar">
          <Navbar />
        </div>
        <h1 className="title">Personagens</h1>
        <div className="search">
          <Search />
        </div>
        <div className="card">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </App>
  )
}

export default People