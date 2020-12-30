import { App } from './SearchStyles'
import { FiSearch } from 'react-icons/fi'

export function hadleClick() {
  return alert('ops')
}

function Search() {

  return (
    <App>
      <section className="contentSearch">
        <input 
        className="inputSearch" 
        type="text" 
        placeholder="Digite um filme"
        />

        <button 
        onClick={() => hadleClick()} 
        className="searchIcon" >
          <FiSearch color='#000'/>
        </button>
      </section>
    </App>
  )
}

export default Search;