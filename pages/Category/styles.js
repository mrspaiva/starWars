import styled from 'styled-components';
import Background from '../../img/background.png';

export const Content = styled.div`
    height: 100vh;
    background-image: url(${Background});
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #FFC500;
  margin: 4rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
`

export const CategoryList = styled.section`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  top: 10rem;

  .films,
  .people,
  .planets,
  .species,
  .starships,
  .vehicles {
    width: 100%;
    text-decoration: none;
    color: #333;
  }
`