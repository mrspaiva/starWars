import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  export const Background = styled.img`
    position: absolute;
    width: 100vw;
    height: 100vh;
  `

  export const Logo = styled.img`
    position: absolute;
  `

  export const Next = styled.div `
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

    &:hover {
      background-color: #DD9500;
    }
  `

