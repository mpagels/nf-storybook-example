import React from 'react'
import styled from 'styled-components'

export default function ToDo({ text, completed, hasChekbox }) {
  return (
    <Wrapper completed={completed}>
      <p>{text} hard coded</p>
      <button>{completed ? 'uncompleted' : 'completed'}</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border: 1px solid black;
  width: 20em;
  padding: 1em;
  background-color: ${({ completed }) => (completed ? 'green' : 'red')};
`
