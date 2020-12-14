import styled from 'styled-components'

export const App = styled.div`

  .contentCard {
    width: 38rem;
    height: 24rem;
    background-color: #282727;
    color: #fff;
    border-radius: 1.6rem;
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.7);
    display: flex;
    margin: 1.8rem;
    padding: 1.2rem;
  }

  .contentCard .cardList {
    list-style: none;
    margin-left: 0.4rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }

  .cardList li {
    display: flex;
    margin-bottom: 1rem
  }

  li .titleCard {
    font-size: 1.5rem;
    color: #FFC500
  }

  li .content {
    margin-left: 1rem;
    display: flex;
    align-items: center;
  }
`