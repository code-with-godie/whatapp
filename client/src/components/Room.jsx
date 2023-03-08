import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 0.5rem;
display: flex;
gap:.5rem;
cursor: pointer;
&:not(:last-child){
    border-bottom: 1px solid #00000016;
}
&:hover{
    background-color:rgba(0, 0, 0, 0.025);
}
`
const Profile = styled.div`
`
const Info = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap:.5rem;
`
const Name = styled.h3`
color: #000000c5;
font-size:1rem;
`
const LastMesssage = styled.p`
font-size:1rem;
`
const Description = styled.div`
display: flex;
justify-content: space-between;
`
const LastSeen = styled.p`
font-style: oblique;
font-size:.9rem;
color: #000000a7;
`
const Room = ({name,lastText,lastTextTime,setCurrentChat,profilePic,chats}) => {
  return (
    <Container onClick={ e=> setCurrentChat(chats)} >
      <Profile>
        <Avatar src={profilePic} />
      </Profile>
      <Info>
        <Name> {name} </Name>
        <Description>
        <LastMesssage> { lastText} </LastMesssage>
        <LastSeen>
            {lastTextTime}
        </LastSeen>
        </Description>
      </Info>
    </Container>
  )
}

export default Room
