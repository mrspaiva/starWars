import styled from 'styled-components'
import Background from '../../img/background.png'

export const App = styled.div`

  .contentFilms {
    overflow: hidden;
    min-height: 100vh;
    background-image: url(${Background});
  }

  .contentFilms .title {
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 5rem;
    margin-top: 2rem
  }

  .contentFilms .search {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 6rem;
  }

  .contentFilms .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    margin-left: 4rem;
    max-width: 90vw;
  }
`