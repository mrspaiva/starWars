import styled from 'styled-components'
import Background from '../../img/background.png'

export const App = styled.div`

  .contentPeople {
    overflow: hidden;
    min-height: 100vh;
    background-image: url(${Background})
  }

  .contentPeople .title {
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 5rem;
    margin-top: 2rem;
  }

  .contentPeople .search {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 6rem;
  }

  .contentPeople .card {
    display: grid;
    grid-template-columns: 1fr 1fr
  }
`