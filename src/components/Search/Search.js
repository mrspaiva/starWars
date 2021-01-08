import { Container, Input, Button } from './SearchStyles'
import { FiSearch } from 'react-icons/fi'

const Search = ({input: text, onChange: setText}) => {

  function handleChange(event) {
    event.preventDefault()
  }

  return (
      <Container onSubmit={handleChange}>
        <Input 
        type="text" 
        placeholder="Digite um filme"
        value={text}
        onChange={event => setText(event.target.value)}
        />

        <Button type="submit">
          <FiSearch color='#000'/>
        </Button>
      </Container>
  )
}

export default Search;