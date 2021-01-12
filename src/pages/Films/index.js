import {useState, useEffect } from 'react'
import { Container, Title, SearchContainer, CardContainer } from './styles'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'
import api from '../../services/api'

function Films() {
  const [filmList, setFilmList] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    async function fetchData() {
      const {data} = await api.get('/films')
      setFilmList(data.results)
    }
    fetchData()
  },[])

  const updateInput = async (input) => {
    const filtered = filmList.filter(film => {
      return film.title.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input)
    setFilmList(filtered)
  }
  
  return (
      <Container>
          <Navbar />
        <Title className="title">Filmes</Title>
        <SearchContainer>
          <Search 
            input={input}
            onChange={updateInput}
          />
        </SearchContainer>
        <CardContainer className="card">
          {filmList.map((film, key) => (
            <Card key={key}>
              <ul>
                <li>
                  <p className="titleCard">Título: </p>
                  <p className="contentCardData">{film.title}</p>
                </li>
                <li>
                  <p className="titleCard">Descrição: </p>
                  <p className="contentCardData">{film.opening_crawl}</p>
                </li>
                <li>
                  <p className="titleCard">Diretor: </p>
                  <p className="contentCardData">{film.director}</p>
                </li>
                <li>
                  <p className="titleCard">Lançamento: </p>
                  <p className="contentCardData">{film.release_date}</p>
                </li>
              </ul>
            </Card>
          ))}
        </CardContainer>
      </Container>
  )
}

export default Films