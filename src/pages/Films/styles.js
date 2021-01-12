import styled from 'styled-components'
import Background from '../../img/background.png'

export const Container = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background-image: url(${Background});
`
export const Title = styled.h1`
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 5rem;
  margin-top: 2rem;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 6rem;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  margin-left: 4rem;
  max-width: 90vw;

  li {
    list-style: none;
    display: flex;
  }

  .titleCard {
    font-size: 1.5rem;
    color: #FFC500
  }

  .contentCardData {
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }
`