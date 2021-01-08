import styled from 'styled-components'

export const Container = styled.form`
  width: 20rem;
  height: 3rem;
  background-color: #C4C4C4;
  border-radius: 1rem;
  display: flex;
`
export const Input = styled.input`
  width: 15rem;
  height: 3rem;
  border-radius: 1rem;
  border-style: none;
  background-color: #C4C4C4;
  margin-left: 1.2rem;
  font-size: 1.5rem;
`

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 4rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  cursor: pointer;
  border: none;
  background-color: #C4C4C4;
  transition: background 0.2s;

  &:hover {
    background-color: #999
  }

  svg{
    width: 4rem;
    height: 2rem;
  }
`