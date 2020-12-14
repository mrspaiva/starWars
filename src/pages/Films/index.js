import {useState, useEffect } from 'react'
import { App } from './styles'
import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Card from '../../components/Card'

function Films() {
  const [film, setFilm] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.dev/api/films")
      const data = await response.json()
      console.log(data)
      setFilm(data.results)
    }
    fetchData()
  },[])

  return (
    <App>
      <div className="contentFilms">
        <div className="navbar">
          <Navbar />
        </div>
        <h1 className="title">Filmes</h1>
        <div className="search">
          <Search />
        </div>
        <div className="card">
          {film.map((film, key) => (
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