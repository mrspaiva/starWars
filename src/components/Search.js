import { App } from './SearchStyles'
import { FiSearch } from 'react-icons/fi'

function Search() {
  return (
    <App>
      <section className="contentSearch">
        <input className="inputSearch" type="text" placeholder="Digite um filme"/>
        <div className="searchIcon">
          <FiSearch color='#000'/>
        </div>
      </section>
    </App>
  )
}

export default Search;