import { Container, Title, SearchContainer, CardContainer } from './styles'
import Navbar  from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'

function People() {
  return (
      <Container>
          <Navbar />
        <Title>Personagens</Title>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Container>
  )
}

export default People