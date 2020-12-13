import styled from 'styled-components'

export const App = styled.div`
  .contentSearch {
    width: 20rem;
    height: 3rem;
    background-color: #C4C4C4;
    border-radius: 1rem;
    display: flex;
  }

  .contentSearch .inputSearch {
    width: 15rem;
    height: 3rem;
    border-radius: 1rem;
    border-style: none;
    background-color: #C4C4C4;
    margin-left: 1.2rem;
    font-size: 1.5rem;
  }

  .contentSearch .searchIcon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 4rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    cursor: pointer;
    transition: background 0.2s
  }

  .contentSearch .searchIcon:hover {
    background-color: #999
  }

  .contentSearch .searchIcon svg{
    width: 4rem;
    height: 2rem;
  }

`