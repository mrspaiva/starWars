import {useState, useEffect } from 'react'
import { Container, Title, SearchContainer, CardContainer } from '../styles'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import api from '../../services/api'


function Starships() {
  const [starshipsList, setStarshipsList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data} = await api.get('/starships')
      setStarshipsList(data.results)
    }
    fetchData()
  },[])

  return (
      <Container>
        <Navbar />
        <Title>Naves</Title>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardContainer>
          {starshipsList.map((film, key) => (
            <Card key={key}>
              <ul>
                <li>
                  <p className="titleCard">Nome: </p>
                  <p className="contentCardData">{film.name}</p>
                </li>
                <li>
                  <p className="titleCard">Modelo: </p>
                  <p className="contentCardData">{film.model}</p>
                </li>
                <li>
                  <p className="titleCard">Classe: </p>
                  <p className="contentCardData">{film.starship_class}</p>
                </li>
                <li>
                  <p className="titleCard">Passageiros: </p>
                  <p className="contentCardData">{film.passengers}</p>
                </li>
              </ul>
            </Card>
          ))}
        </CardContainer>
      </Container>
  )
  
}

export default Starships