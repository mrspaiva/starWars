import {useState, useEffect } from 'react'
import { Container, Title, SearchContainer, CardContainer } from '../styles'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import api from '../../services/api'


function Species() {
  const [speciesList, setSpeciesList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data} = await api.get('/species')
      setSpeciesList(data.results)
    }
    fetchData()
  },[])

  return (
      <Container>
        <Navbar />
        <Title>Espécies</Title>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardContainer>
          {speciesList.map((film, key) => (
            <Card key={key}>
              <ul>
                <li>
                  <p className="titleCard">Nome: </p>
                  <p className="contentCardData">{film.name}</p>
                </li>
                <li>
                  <p className="titleCard">Língua: </p>
                  <p className="contentCardData">{film.language}</p>
                </li>
                <li>
                  <p className="titleCard">Classificação: </p>
                  <p className="contentCardData">{film.classification}</p>
                </li>
                <li>
                  <p className="titleCard">Cor da pele: </p>
                  <p className="contentCardData">{film.skin_colors}</p>
                </li>
              </ul>
            </Card>
          ))}
        </CardContainer>
      </Container>
  )
  
}

export default Species