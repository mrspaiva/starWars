import {useState, useEffect } from 'react'
import { App } from './styles'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Card from '../../components/Card'

function Films() {
  const [filmList, setFilmList] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/films")
      const data = await response.json()
      console.log(data)
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
    <App>
      <div className="contentFilms">
        <div className="navbar">
          <Navbar />
        </div>
        <h1 className="title">Filmes</h1>
        <div className="search">
          <Search 
            input={input}
            onChange={updateInput}
          />
        </div>
        <div className="card">
          {filmList.map((film, key) => (
            <Card 
            key={key} 
            title={film.title}
            description={film.opening_crawl}
            director={film.director}
            release={film.release_date}
            />
          ))}
        </div>
      </div>
    </App>
  )
}

export default Films