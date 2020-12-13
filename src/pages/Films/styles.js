import styled from 'styled-components'
import Background from '../../img/background.png'

export const App = styled.div`

  .contentFilms {
    height: 100vh;
    background-image: url(${Background})
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
    margin-top: 2rem
  }
`