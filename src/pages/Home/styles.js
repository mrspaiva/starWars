import styled from 'styled-components';

export const App = styled.div`
  .background {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }

  .logo-container {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    position: absolute;
  }

  .next {
    position: absolute;
    right: 3rem;
    bottom: 3rem;
    border-radius: 1.5rem;
    border-style: none;
    background-color: #FFC500;  
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    transition: background-color 0.2s;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .next:hover {
    background-color: #DD9500;
  }
`;

