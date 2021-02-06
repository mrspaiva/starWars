import {useState, useEffect } from 'react'
import { Container, Title, SearchContainer, CardContainer } from '../styles'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import api from '../../services/api'


function Planets() {
  const [planetList, setPlanetList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {data} = await api.get('/planets')
      setPlanetList(data.results)
    }
    fetchData()
  },[])

  return (
      <Container>
        <Navbar />
        <Title>Planetas</Title>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardContainer>
          {planetList.map((film, key) => (
            <Card key={key}>
              <ul>
                <li>
                  <p className="titleCard">Nome: </p>
                  <p className="contentCardData">{film.name}</p>
                </li>
                <li>
                  <p className="titleCard">Clima: </p>
                  <p className="contentCardData">{film.climate}</p>
                </li>
                <li>
                  <p className="titleCard">Período Orbital: </p>
                  <p className="contentCardData">{film.orbital_period}</p>
                </li>
                <li>
                  <p className="titleCard">População: </p>
                  <p className="contentCardData">{film.population} habitantes</p>
                </li>
              </ul>
            </Card>
          ))}
        </CardContainer>
      </Container>
  )
  
}

export default Planets