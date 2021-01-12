import { Container, Title, SearchContainer, CardContainer } from './styles'
import Navbar  from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import { useEffect, useState } from 'react'
import api from '../../services/api'

function People() {
  const [peopleList, setPeopleList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data} = await api.get('/people')
      setPeopleList(data.results)
    }
    fetchData()
  },[])

  return (
      <Container>
          <Navbar />
        <Title>Personagens</Title>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardContainer>
        {peopleList.map((film, key) => (
            <Card key={key}>
              <ul>
                <li>
                  <p className="titleCard">Nome: </p>
                  <p className="contentCardData">{film.name}</p>
                </li>
                <li>
                  <p className="titleCard">altura: </p>
                  <p className="contentCardData">{film.height}</p>
                </li>
                <li>
                  <p className="titleCard">Cor da pele: </p>
                  <p className="contentCardData">{film.skin_color}</p>
                </li>
                <li>
                  <p className="titleCard">Nascimento: </p>
                  <p className="contentCardData">{film.birth_year}</p>
                </li>
              </ul>
            </Card>
          ))}
        </CardContainer>
      </Container>
  )
}

export default People