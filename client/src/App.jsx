import React, { useState } from 'react'
import styled from 'styled-components'
import Chats from './components/Chats'
import Contacts from './components/Contacts'

const Wrapper = styled.main`
display: flex;
height: 100vh;
overflow: auto;
`
const App = () => {
  const [currentChat,setCurrentChat] = useState([])
  return (
    <Wrapper>
      <Contacts setCurrentChat={setCurrentChat} />
      <Chats chats = {currentChat} />
    </Wrapper>
  )
}

export default App
