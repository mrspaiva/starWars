import styled from 'styled-components';

export const App = styled.div`
  .contentLogo {
    position: relative;
    width: 100vw;
    height: 4rem;
    background-color: rgba(99, 99, 99, 0.2);
  }

  .clickLogo {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .clickLogo img{
    position: absolute;
    width: 8rem;
    cursor: pointer;
  }
`;