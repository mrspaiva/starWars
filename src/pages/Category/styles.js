import styled from 'styled-components';
import Background from '../../img/background.png';

export const App = styled.div`

  .content {
    height: 100vh;
    background-image: url(${Background});
    display: flex;
    flex-direction: column;
  }

  .content .title {
    display: flex;
    justify-content: center;
    color: #FFC500;
    margin: 4rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
  }

  .content .category {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    top: 10rem
  }

  .category .films,
  .people,
  .planets,
  .species,
  .starships,
  .vehicles {
    height: 4rem;
    width: 18rem;
    border-radius: 1rem;
    border: none;
    margin-top: 1.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    background-color: #fff;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    color: #333;

    display: flex;
    justify-content: center;
    align-items: center;
  } 
`;