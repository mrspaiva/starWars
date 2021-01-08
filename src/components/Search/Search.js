import { App } from './SearchStyles'
import { FiSearch } from 'react-icons/fi'

const Search = ({input: text, onChange: setText}) => {

  function handleChange(event) {
    event.preventDefault()
  }

  return (
    <App>
      <form onSubmit={handleChange} className="contentSearch">
        <input 
        className="inputSearch" 
        type="text" 
        placeholder="Digite um filme"
        value={text}
        onChange={event => setText(event.target.value)}
        />

        <button 
        className="searchIcon" 
        type="submit"
        >
          <FiSearch color='#000'/>
        </button>
      </form>
    </App>
  )
}

export default Search;