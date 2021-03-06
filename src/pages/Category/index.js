import { Content, Title, CategoryList } from './styles'
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

function Category() {
  return (
      <Content>
          <Navbar />
        <Title>Escolha uma categoria</Title>
        
        <CategoryList>
          <Button>
            <Link to="/category/films" className="films">Filmes</Link>
          </Button>
          <Button>
            <Link to="/category/people" className="people">Personagens</Link>
          </Button>
          <Button>
            <Link to="/category/planets" className="planets">Planetas</Link>
          </Button>  
          <Button>
            <Link to="/category/species" className="species">Espécies</Link>
          </Button>
          <Button>
            <Link to="/category/starships" className="starships">Naves</Link>
          </Button>
          <Button>
            <Link to="/category/vehicles" className="vehicles">Veículos</Link>
          </Button>
        </CategoryList>
      </Content>
  )
}

export default Category