import { Container, CardList } from './CardStyles'

function Card(props) {
  return (
      <Container>
        <CardList>
          <p>{props.children}</p> 
        </CardList>
      </Container>
  )
}

export default Card;